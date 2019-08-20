const states = {
    pending: 'Pending',
    resolved: 'Resolved',
    rejected: 'Rejected'
};

class Promise_impl{

    constructor(executor){

        const resolve = ()=>{
            console.log("resolver");
            //如果當前是個promise 而且狀態是resolved
            //就跑 當前他的then
            if (value instanceof Nancy && state === states.pending) {
                value.then(value => apply(value, states.resolved));
            } else {
                apply(value, state);
            }

            //不是的話就直接當作return value
        }
        const reject = (value)=>{
            console.log("reject!");
            //如果當前是個promise 而且狀態是resolved?? rejected?
            //就跑 當前他的catch
            if (value instanceof Nancy && state === states.pending) {
                value.catch(value => apply(value, states.rejected));
            } else {
                apply(value, state);
            }

            //不是的話就直接當作return value
        }

        const apply = (value, state) => {
            if (this.state === states.pending) {
                this.value = value;
                Object.assign(this, members[state]);
                // for loop run TODO
            }
        };

        try{
            executor(resolve, reject);
        }catch(error){
            reject(error);
        }
    }


    //for being directly accessed by protoype
    static resolve(action){
        console.log("static resolver");
        // return new Promise_impl((resolve)=>resolve(action));
    }

    static reject(action){
        // return new Promise_impl((_, reject)=>reject(action));
    }

}

function main(){
    const b = new Promise_impl((resolve, reject)=>setTimeout(()=>resolve(console.log("Ho")),3000));
    // b.then(()=>console.log("Hey"));
}

main()