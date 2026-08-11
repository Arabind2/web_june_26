// var x=10;
// let y=20;
// console.log(x);
// debugger
// console.log(y);

//-------->Local Scope<--------
function go() {
    console.log("I have to go .");
    
    var k=18;
    return k;
    let r=45;
    console.log(k, r);
    
}

let s=go();
console.log(s);

//-------->Block Scope<---------
// {
//     var age = 22;

//     console.log(age); // 22
// }
// console.log(age);

// ------->lexical scope<---------
// function fun1() {
//     debugger
//     let x=10;
//     console.log(x);

//     function fun2() {
//         let y=20;
//         console.log(y);
//         console.log("value of x inside nested function.", x);

//         function fun3() {
//             console.log("Value of y inside fun3", y);
//             console.log("Value of x inside fun3 ", x);
//         }
//         console.log("Before calling fun3.");
//         fun3();
//         console.log("After calling fun3. ");
            
//     }
//     console.log("Before calling fun2.");
//     fun2();
//     console.log("After calling fun2.");
       
// }
// fun1();