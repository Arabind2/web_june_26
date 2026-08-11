//1.
function go(){
    console.log("It is go method.");
    
}
go();

//2.
function call(){
    console.log("It is call method");
    
}
call();
call();
call();


//3.
function print(){
    for (let i = 1; i < 10; i++) {
    console.log(i);
        
    }
}
print();


//4.
function age(){
    let age=20;
    if(age>18){
        console.log("You are eligible for vote.")
    }else{
        console.log("You are not eligible for vote.")
    }

}
age();