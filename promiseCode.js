// https://hackernoon.com/implementing-javascript-promise-in-70-lines-of-code-b3592565af0f
const states = {
    pending: 'Pending',
    resolved: 'Resolved',
    rejected: 'Rejected'
};

class Nancy {
    constructor(executor) {
        const tryCall = function(callback){
            return Nancy.try(function(){
                return callback(this.value);
            });
        }

        const laterCalls = [];

        const callLater = function(getMember){
            return function(callback){
                return new Nancy(resolve => laterCalls.push(
                        () => resolve( getMember()(callback) ) 
                    )
                );
            }
        } 
        const members = {
            [states.resolved]: {
                state: states.resolved,
                then: tryCall,
                catch: _ => this
            },
            [states.rejected]: {
                state: states.rejected,
                then: _ => this,
                catch: tryCall
            },
            [states.pending]: {
                state: states.pending,
                then: callLater(() => this.then),
                catch: callLater(() => this.catch)
            }
        };
        const changeState = state => Object.assign(this, members[state]);
        const apply = (value, state) => {
            if (this.state === states.pending) {
                this.value = value;
                Object.assign(this, members[state]);
                for (const laterCall of laterCalls) {
                    laterCall();
                }
            }
        };

        const getCallback = state => value => {
            if (value instanceof Nancy && state === states.resolved) {
                value.then(value => apply(value, states.resolved));
                value.catch(value => apply(value, states.rejected));
            } else {
                apply(value, state);
            }
        };

        const resolve = getCallback(states.resolved);
        const reject = getCallback(states.rejected);
        changeState(states.pending);

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    static resolve(value) {
        return new Nancy(resolve => resolve(value));
    }

    static reject(value) {
        return new Nancy((_, reject) => reject(value));
    }

    static try(callback) {
        return new Nancy(resolve => resolve(callback()));
    }
}