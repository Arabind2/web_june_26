// function greeting(){
//     console.log("Hello Sir. !");
//     return 10;
// }
// console.log(greeting());





// function addNumber(num1,num2,num3,num4=0){
//     const sum=num1+num2+num3+num4;
//     console.log(sum);
    // }
// addNumber(10,20);
// addNumber(10,20,30);
// addNumber(10,20,30,40);


// =======rest operator=========
// function addNumber(...num){
//     let sum=0;
//     for(let n of num){
//     sum+=n;
//     }

//     console.log(sum);
    
// }
// addNumber(10,203,4902,404,38329)



//==========spread operator=========
const arr=[10,20,30,40,50];
const arr2=[39,483,282,482];

// const [first,second,...num]=arr;
// console.log(first,second,num);

const ans=[...arr,...arr2];
console.log(ans);



//=========function expression=========
// const addNumber=function (num1,num2){
//     return num1+num2;
// }

// console.log(addNumber(10,30));



//===========arrow function==========
// const addNumber=(num1,num2)=>{
//     return num1+num2;
//     }

    //or
// const addNumber=(num1,num2)=>num1+num2;
// console.log(addNumber(3,4));

//if we have single parameter, no need of this()
// const squarenumber=num=>num**3;
// console.log(squarenumber(6));



// const greeting=()=>{
//     let user={
//         name:"Arabind",
//         city:"cuttack"
//     }
//     return user
// }
// console.log(greeting());

// or

// const greeting=()=>({
//       name:"Arabind",
//          city:"cuttack"
//      })

//      console.log(greeting());
     

// IIFE 

// (function greeting(){
//     console.log("Hello, Ji");
    
// })();

 
// (()=>{
//     console.log("Hello, sir");
//     })();


//callback function
// function greet(){
//     console.log("It is greet method. ");
    
// }
// function dance(){
//     console.log("It is dance method. ");
    
// }
// function meet(callback){
//     console.log("It is meet method. ")

//     callback();
//     console.log("It is finished.")
// }
// meet(greet);
// meet(dance);



// function zomatoOrderPlaced(){
//     console.log("We have started preparing your food. ");
    
// }
// function blinkitOrderPlaced(){
//     console.log("We have started preparing your food ");
    
// }
// function payment(amount,callback) {
//    console.log(`${amount} payment has initialized`);
//     console.log("Payment is received ");
//     callback();
    
// }
// payment(500,zomatoOrderPlaced);