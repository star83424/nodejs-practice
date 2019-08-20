function main(){
    //async20190808();
    // const number;

    // try {
    //   number = 99;
    // } catch(err) {
    //   console.log(err);
    //   // expected output: TypeError: invalid assignment to const `number'
    //   // Note - error messages will vary depending on browser
    // }
    let x =1;
    {
        x = 2;
    }
    console.log(x);

}

//Timeout message function for Promise ayns / await practice
let timeoutMessage = (msg, timeout) => new Promise ((resolve, reject)=> { 
    if (timeout){
        setTimeout(() => {
            console.log(msg);
            resolve("Success:" + msg);
        }, timeout);
    }else{
        reject("Error occurs:" + msg);
    }
    

})
// timeoutMessage("aaa", 1000).then((val)=>timeoutMessage(val, 3000)).then((msg)=>{console.log("hi:", msg)});

const async20190808 = async () => {
    try{
        //2nd will start right after 1st completed.
        await timeoutMessage("1st", 1000).then(()=>timeoutMessage("2nd", 1000));
        //The following lines will all start after 1st and 2nd both completed.

        //  right after 2nd
        timeoutMessage("4th", 2000);

        //  right after 2nd  (dont need to wait for simple promise ex: 4th)
        setTimeout(()=>{console.log("5th");},3000)

        //  right after 2nd as it's the end of the first await
        await timeoutMessage("3rd", 1000);

        //The following lines will start after 3rd completed.
        setTimeout(()=>{console.log("6th");},3000)

    }catch(e){
        console.error(e);
    }
}

function hey(msg){
    setTimeout(()=>{
        msg = msg + "12345";
        console.log(msg);
        return msg;
    },3000)
}


// var v1 = "a";
// if (1){
//     v1 = "abc";
//     console.log(v1);
//     let v1;
// }

// let l1 = 5;
// if (true){
//     l1 = 7;
//     console.log(l1);
//     let l1;
// }
// // let l1 = 7;
// console.log(l1);



main()