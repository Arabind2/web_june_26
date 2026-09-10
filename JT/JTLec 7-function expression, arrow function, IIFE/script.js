//----->function expression-------->
//================================
// const hello=function greet() {
//     console.log("It is greet method. ");
// }

// hello();

// const concatString = function (a, b) {
    // console.log("The concatenated string is: " + a + b);
//     return a+b;
// };

// console.log(concatString("Hello ", "World!"));



//=============Annonymous Function=================

// let add = function (a, b) {
//     return a + b;
// };

// console.log(add(10, 20));



//=============Arrow Function=================
// const add=(num1, num2)=>{
//     console.log("Adding num1, num2");
    
//     return num1+num2;
// }
// console.log(add(10,20))
// // or
// const add=(num1, num2)=>num1+num2;
// const result=add(10, 20);
// console.log("The result is: "+result);


// const greet= (name)=>console.log(name+" says Good Morning!");
// greet("John");



//=============IIFE=================
// (function (name) {
//     console.log("IIFE is running!", name);
// })("John");


// var a = 10;
// (function() {
//   console.log(a);
//   var a = 20;
//   console.log(a);
// })();