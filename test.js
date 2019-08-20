function test() {

    
    for (var i = 0; i < 10; i++) {
        console.log(i)
        // setTimeout(function () {
        //     console.log(i)
        // }, 0)
        // ((i)=>setTimeout(function() {
        //     console.log(i)
        // }, 0))(i);
    }

    // for (let i = 0; i < 10; i++) {
    //     console.log(i);
    //     setTimeout(function () {
    //         console.log('The number is ' + i);
    //     }, 1000);
    // }
    console.log("*", i)
}

var object={
    i:10,
    x:3,
    nest:{
        x:4
    },
    fn: function(){

        console.log("fn:",this.i);
        function fn2(){
            console.log("fn2:",this.i);
            // for (var i = 0; i < 10; i++) {
            //     console.log(i)
            // }
        }
        fn2()
        // console.log("end:", i);
        // for (var i = 0; i < 10; i++) {
        //     console.log(i)
        // }
        // console.log("end:", i);
    }
}
// object.fn();
var x = 2;
function hhh(){
    this.x = 1;
}
// hhh()
function say(){
    console.log(this.x);
}
say.apply(object);
object.say = say;

object.say.apply(object.nest);



// test()


////////
// NodeJS中，全域變數並非宣告在global object中，所以global var無法在global範圍的this中找到
// 實際運作方式比較像是由一個function再去包裹整個code執行，故 var a 不同於 global的this.a
// 但如果是運行在browser，global var可以在global scope中（也就是window物件中）找到
// 則此時 var a=10;  即可於 this.a 中取得到10

// var a = 10;
// this.a = 20;
// console.log(a);
// console.log(this.a);
// console.log(this); 

////////
// then(fn) : 傳入的參數fn必須是function，才能被正確註冊到promise的resolve後執行的動作
// 若不為function，則引擎解析此句的時，會為了找尋有無return function而直接執行statement，導致內部動作完全沒有等待resolve即立刻執行

// console.log("1");
// setTimeout(() => console.log("5"), 0);
// const p = new Promise((resolve, reject)=>{
//     console.log("2");
//     setTimeout(() => resolve(console.log("6")),0);
//     console.log("3");
// }); 
// setTimeout(()=>console.log("10"), 0);
// p.then(console.log("8")).then(setTimeout(()=>console.log("9") , 0));
// setTimeout(()=>console.log("7"), 0);
// console.log("4");

// console.log("1");
// setTimeout(() => console.log("5"), 0);
// const p = new Promise((resolve, reject)=>{
//     console.log("2");
//     setTimeout(() => resolve(console.log("6")),0);
//     console.log("3");
// }); 
// p.then(console.log("8"));
// setTimeout(()=>console.log("7"), 0);
// console.log("4");
// //Result        : 1,2,3,8,4,5,  6,7
// //My Expectation: 1,2,3,  4,5,8,6,7

// console.log("1");
// setTimeout(() => console.log("5"), 0);
// const p = new Promise((resolve, reject)=>{
//     console.log("2");
//     setTimeout(() => resolve(console.log("6")),0);
//     console.log("3");
// }); 
// p.then(setTimeout(()=>console.log("8") , 0));
// setTimeout(()=>console.log("7"), 0);
// console.log("4");
// // Result        : 1,2,3,4,5,6,8,7
// // My Expectation: 1,2,3,4,5,6,  7,8

// console.log("1");
// setTimeout(() => console.log("5"), 0);
// const p = new Promise((resolve, reject)=>{
//     console.log("2");
//     setTimeout(() => resolve(console.log("6")),0);
//     console.log("3");
// }); 
// p.then(()=>setTimeout(()=>console.log("8") , 0));
// setTimeout(()=>console.log("7"), 0);
// console.log("4");
// //Result: 1,2,3,4,5,6,7,8
// //Same as my expectation



function compare(a, b) {
    //Object.is 是 === 但把 NaN 與 +0 -0 挑出來處理
    console.log(a == b, a === b, Object.is(a, b));
}