// const users=[
//     {
//         id:1, name: "Amit", isActive: true
//     },
//      {
//         id:2, name: "Rahul", isActive: false
//     },
//      {
//         id:3, name: "Neha", isActive: true
//     }
// ]
//1.
// let activeUsers=users.filter(value => value.isActive==true);
// console.log(activeUsers);

//======================================


//2.
// let user=users.map(value=>{
//     return value.name;
// })
// console.log(user);



//3
// const product=[
//     {id:1, name : "laptop", price: 50000},
//      {id:2, name : "Mobile", price: 20000},
//       {id:3, name : "Tablet", price: 30000}
// ];

// let names=product.filter(product=>  product.price>25000).map(product=>product.name)
// console.log(names);

//4.

// const students=[
//     {name:" A", marks: 80},
//     {name:" B", marks: 45},
//     {name:" C", marks: 60},
// ]

// let newStudent=students.map(student=>({
//     name: student.name,
//     marks: student.marks,
//     result: student.marks>50 ? "Pass" : student.marks <50 ? "Fail" : ""
// }))
// console.log(newStudent);



// const result=students.filter(student=> student.marks>=50);
// let newStudents=result.map((value)=> console.log("value is", value, "result :  Pass" ));
// console.log(newStudents);
