// let numbers=[10,20,30,40,50]

// for (let i = 0; i < numbers.length; i++) 
//     console.log(numbers[i]);

// console.log("Hello");

//==============for each===========
// numbers.forEach(function printNumbers(value,idx,arr){
//     console.log("Value is ", value ," at index ", idx , " of array " , arr);
    
// })

//=============================
//     numbers.forEach(printNumbers)
// function printNumbers(value,idx,arr){
//     console.log("Value is ", value ," at index ", idx , " of array " , arr);
    
// }
//================================

//     numbers.forEach(function (value,idx,arr){
//     console.log("Value is ", value ," at index ", idx , " of array " , arr);
    
// })

//==============================
// const printNumbers=function (value,idx,arr){
//     console.log("Value is ", value ," at index ", idx , " of array " , arr);
    
// }
// numbers.forEach(printNumbers)

//===============================

// numbers.forEach(function (value,idx,arr){
//     console.log("Value is ", value ," at index ", idx , " of array " , arr);
    
// })

//==============================
// numbers.forEach( (value,idx,arr)=>{
//     console.log("Value is ", value ," at index ", idx , " of array " , arr);
    
// })


//===========Map function==============

// const numbersIncreasedByTwo=numbers.map((value,idx,arr)=>{
//     console.log("Value is", value, "  at index", idx, " of array", arr)
//     return value+2
    
// })
// console.log(' numbersIncreasedByTwo', numbersIncreasedByTwo);

//==================================

// const squareNumbers=numbers.map(value=> value*value)
// console.log(' SquareNumbers', squareNumbers);

//===============================

// const CubeNumbers=numbers.map(value=> value*value*value)
// console.log(' CubeNumbers is', CubeNumbers);

//=======================

// const users=[{
//     id: 101,
//     name: 'Sambit Parida',
//     salary: 100000
// },
// {
//     id: 102,
//     name: 'Snigdha Mohnty',
//     salary: 110000
// },
//  {
//     id: 103,
//     name: 'Aiswarya Ayaskant',
//     salary: 120000
//  },
//   {
//     id: 104,
//     name: 'Sinumayee Prusty' ,
//     salary: 130000
//  }
// ]
// const go=users.map(function (value){
//     return {
//         id: value.id,
//         firstName: value.name.split(" ")[0],
//         bonus: value.salary*.10
//     }
// })
// console.log(go);



// const modifiUsers=users.map( (value)=>{
//     console.log("value is ", value);
    
//     return {
//         id: value.id,
//         firstName: value.name.split(" ")[0],
//         bonus: value.salary*.10
//     }
// })


// const modifiusers=users.map( user=>({
    
//         id: user.id,
//         firstName: user.name.split(" ")[0],
//         bonus: user.salary*.10
    
// }))
// console.log("Modified Users", modifiusers);



//============Filter Function=============
// numbers=[10,11,20,21,30,31]

// const divisibleByTen=numbers.filter((value,idx,arr)=>{
//     console.log("value is ", value, "at index", idx, " of array", arr);
//     return value%10==0
// })
// console.log("divisible by ten ", divisibleByTen);
// divisibleByTen.forEach(element => console.log(element));

//======================Some()==================

// numbers=[10,20,30,40]

// const isAnyOddPresent= numbers.some(num=> num%2==1)
// console.log("/// is Any odd present", isAnyOddPresent);

// const isAnyMemberAreEven=numbers.every(num=>num%2==0)
// console.log("//// is every members arre even ", isAnyMemberAreEven);

//Ex-1

// const product=[
//     {id:1, name : "laptop", price: 50000},
//      {id:2, name : "Mobile", price: 20000},
//       {id:3, name : "Tablet", price: 30000}
// ];

// const exp=product.some(product=> product.price> 40000)
// console.log(exp);

// const exp2=product.every(product=> product.price> 40000)
// console.log(exp2);

//Ex.2

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

// let us=users.some(users=> users.isActive==true)
// console.log(us);

// let us2=users.every(users=> users.isActive==true)
// console.log(us2);


//===============find()================

// numbers=[10,20,30,40,52]

// const num=numbers.find(num=> num==40)
// console.log(" is 42 found ", num);   // if 42 is not available then it returns undefined

//const numberIdx=numbers.findIndex(num => num==42)//  if 42 is not available then it returns -1
// console.log(" is 42 found ", numberIdx);


//Ex.1

const product=[
    {id:1, name : "laptop", price: 50000},
     {id:2, name : "Mobile", price: 20000},
      {id:3, name : "Tablet", price: 30000}
];

// const pro=product.find(product=> product.id==2);
// console.log(pro);

// const findId=product.findIndex(product=>product.id==2 );
// console.log(findId);


//Ex.2

// const students=[
//     {name:"A", marks: 80},
//     {name:"B", marks: 45},
//     {name:"C", marks: 60}
// ]

// const std=students.find(student=> student.name=="C");
// console.log(std);


// const StdId=students.findIndex(student=>student.name=="C" );
// console.log(StdId);



//================reduce()===========
//(prevVal=> accumulator)

// numbers=[10,20,30,40,51]

// const sum=numbers.reduce((prevVal,currVal,idx,arr)=>{

//     console.log("Previoue value is", prevVal, " current value is", currVal, "at index", idx, " of array", arr);
//     return prevVal+currVal
// }
// )
// console.log(sum);

//================================

// const orders=[
//     {
//         id:101,
//         amount:2000,
//         status: "Delivered"
//     },
//       {
//         id:102,
//         amount:4000,
//         status: "Pending"
//     },
//       {
//         id:103,
//         amount:6000,
//         status: "Delivered"
//     }

// ]

//1.find the order which status are delivered.
//2.merge the delivered ordered amount to get total sale.

// const order=orders.filter(order=>order.status=="Delivered");
// console.log(order);

// const or=order.reduce((prev,cur)=>{
//     console.log("...prev", prev, " .....current value", cur);
    
//     return prev+cur.amount
// },0)
// console.log(" total sale",or);



//========================
const users=[
    {
        id:1,
        name:"Sarthak",
        age:20
    },
     {
        id:2,
        name:"Amit",
        age:26
    },
     {
        id:3,
        name:"Nikhil",
        age:28
    }
]
//find the average age of users

let avgAge=users.reduce((prev,cur)=>{
    return prev+cur.age;
},0)
console.log("///// average students", avgAge/users.length);
