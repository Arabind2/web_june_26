// Function

// function declaration
function hello(){
    console.log("it is hello function");
}
hello();//calling function

// function expression
let add=function(){
    console.log(12+23);

}
add();

// function with parametrs
function add1(num1,num2){
    return num1*num2;

}
let result=add1(20,30);
console.log(result);