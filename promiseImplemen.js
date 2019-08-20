class Promise_impl{
    
    constructor(targetFunction){
        this.state = 0;
        this.value = undefined;
        this.toDoList = [];
        targetFunction((val)=>this.resolve(val), (val)=>this.reject(val));
    }

    resolve(action){
        this.returnAction(action, 1);
    }

    reject(action){
        this.returnAction(action, 2);
    }

    changeStatr(state){
        this.state = state;
        switch (state){
            case 0:
                return ;
            case 1:
                this.cbName = "onFulFilled";
                this.resolver = "resolve";
            case 2:
                this.cbName = "onRejected";
                this.resolver = "rejecte";

        }
    }

    returnAction(action, state){
        console.log(this.state);
        if (this.state !== 0) return;
        this.state = state;
        this.value = action;
        // this.run();
    }

    run(action){
        cbName = "";
        switch (this.state){
            case 0:
                return ;
            case 1:
                cbName = "onFulFilled";
            case 2:
                cbName = "onRejected";

        }


    }

    then(onFulfilled, onRejected){
        // new a promise to carry on the next step
        let toDo = new Promise_impl(()=>{});
        toDo.onFulfilled = typeof onFulfilled === "function" ? onFulfilled: null;
        toDo.onRejected = typeof onRejected === "function" ? onRejected: null;
        this.toDoList.push(toDo);

        //this.run();
        return toDo;
    }

    catch(onRejected){
        // new a promise to carry on the next step
        let toDo = new Promise_impl(()=>{});
        toDo.onFulfilled = null;
        toDo.onRejected = typeof onRejected === "function" ? onRejected: null;
        this.toDoList.push(toDo);

        //this.run();
        return toDo;
    }



}

function main(){
    // const a = new Promise((resolve, reject)=>setTimeout(()=>resolve(console.log("Hi")),3000));
    // a.then(2).then(val=>console.log(val));

    // const c = Promise.resolve(2);
    // c.then(3).then(val=>console.log(val));

    const b = new Promise_impl((resolve, reject)=>setTimeout(()=>resolve(console.log("Ho")),3000));
    b.then(()=>console.log("Hey"));
}

main();