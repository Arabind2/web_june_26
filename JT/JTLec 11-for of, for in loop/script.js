// let fruits=["Apple", "Banana", "Mango"]

//for loop
// console.log("By using for loop-----------");
// for (let index = 0; index < fruits.length; index++) {
//     console.log(fruits[index]);
    
// }

//for of (array)
// console.log("By using for of loop-----------");
// for(const n of fruits){
//     console.log(n);
    
// }


//for in loop(object)=========
// const student={
//     id:101,
//     name:"Ankit",
//     age:21,
//     course: "Java Fullstack",
//     courseFees:30000.99
// }
// for (const key in student) {
        
//     console.log( student[key]);
    
    // }


//Object.keys()=======arrays of keys
// let c=Object.keys(student)
// for (const element of c) {
//         console.log(element);
        
//     }


//Object.values()=====array of values
// let c2=Object.values(student)
// c2.forEach(element => {
//    console.log(element);
    
// });


//Object.entries()===> array of arrays of key value pairs
// const student={
//     id:101,
//     name:"Ankit",
//     age:21,
//     course: "Java Fullstack",
//     courseFees:30000.99
// }
// console.log(Object.entries(student));





// let c=["Apple", "Banana",[1, 2, [5,6,7], 3, 4],"snigdha", "Binay"]
// console.log(c[2][2][1]);
// const entries=Object.entries(student)
// for (const element of entries) {
    // console.log("outer loop");
    // for (let index = 0; index < element.length; index++) {
    //     console.log("value is",   element[index], "at index", index);
       
        
    // }
    
// }


//in destructuring
// for (const element of Object.entries(student)) {
//     let[a,b]=element;
//     console.log(a,b);
    
// }

//or
// for (const [a,b] of Object.entries(student)) {
    
//     console.log(a,b);
    
// }