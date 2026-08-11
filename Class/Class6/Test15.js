function greet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}

let call=function(){
    console.log("hello");
    
}
console.log(greet(call,5));