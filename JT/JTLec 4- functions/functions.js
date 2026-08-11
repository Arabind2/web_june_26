//1. function declaration
// function <fun_name>(list of params){}
function myFun(){
    console.log("Good morning");
}
// myFun();

function greet(name='JT'){
    console.log("Good Morning",name,'!!!');
    
}
// greet("Arabind");
// greet(2);
// greet();
//greet(true);
// greet();
//greet("Arabind",10);

function addJTTag(name){
    return "JT'ans  "+name
}
let updateName=addJTTag("Arabind")
console.log(updateName);


function add(a,b){
    return a+b;
}

let sum=add(10,20)
console.log(sum);

