// let numbers=[10,20,30,40,50];



//another way to extract value => to assign variable
// const [a, b, c, d, e]=numbers
// console.log(a, b, c, d, e);
//============
//skip the third value====
// const [a, b, _, d, e]=numbers
// console.log(a, b, d, e);  
//========
//I want 3 value etract
// const [a, b, c]=numbers
// console.log(a, b, c);
//========
// const [a, b, c, ...rest ]=numbers
// console.log(a, b, c, rest);

//===============
// numbers=[100,200]
// const [a, b, c=1000, ...rest]=numbers
// console.log(a, b, c, rest);

//==============

// const user={
//     id:101,
//     name: "Arabind",
//     age:"21",
//     salary:40000,
//     address:{
//         city: "BBSR",
//         pin: "751007"
//     }
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));
//
// const {id: userId, name: username, age=30, ...rest}=user  //we change the id and name keys .
//console.log(id,name) // referenceerror :- id is not defined
// console.log(userId, username, age, rest);


//=====
const employee={
    id:101,
    name: "Arabind",
    age:"21",
    salary:40000,
    
}
function handleUpdate(target) {
    const {name, value}=target
    employee[name]=value

}

handleUpdate({name: "age", value: 28})
handleUpdate({name: "id", value: 102})
handleUpdate({name: "salary", value: 40000.99})

console.log(employee);
