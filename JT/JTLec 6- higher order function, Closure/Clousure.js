 
 function increament(){
  let number=10
    return function plusOne (){
    console.log("Adding one ");
    number++
    console.log("number value is ", number);
    
}
}  
const nestedFun=increament()
nestedFun()
nestedFun()