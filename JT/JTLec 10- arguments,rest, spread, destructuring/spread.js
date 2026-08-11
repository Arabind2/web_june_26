// const numbers=[10,20,30,40,50];
// console.log(numbers);
// console.log(...numbers);


//======================
// const employees=[
//     {
//         name:"Raj", age: 25
//     },
//     {
//         name:"Amit", age: 26
//     },
//     {
//         name:"Ankit", age: 27
//     },
//     {
//         name:"Rajesh", age: 28
//     }
// ]
// console.log(employees);
// console.log(...employees);

// const name="Arabinda Muduli";
// console.log(...name);

//========================
//copy arrays:==> (one array copy to another):


// const arr1=[100,200,300];
// const arr2=[...arr1]
// arr2.push(500);
// console.log(arr2);
// console.log(arr1);

//===============
//merge arrays:==>
// const arr1=[10,20,30]
// const arr2=[100,200,300]
// const arr3=[...arr1, ...arr2];
// console.log(arr3);

// const name="javascript"
// const arr4=[...arr1, ...arr2, ...name]
// console.log(arr4);


//================
//copy objects:==>

// const user={
//     id:101,
//     name:" Aju",
//     age:23,
//     }
    
//     const copyUser={...user, phone: "9937252145"}
//     console.log(copyUser);

    // const copyUser1={}
    // Object.assign(copyUser1, user) 
    // console.log(copyUser1);
   
    //===============

    // const employee={
    // id:101,
    // name:" Aju",
    // age:23,
    // address: {
    //     city: "BBSR",
    //     pin: '751007'
    // }
    // }
    
    // const copyEmployee=JSON.parse(JSON.stringify(employee));
    // copyEmployee.address.city="Cuttack";
    // console.log(copyEmployee);
    // console.log(employee);
    
    //or======

    //   const employee={
    // id:101,
    // name:" Aju",
    // age:23,
    // address: {
    //     city: "BBSR",
    //     pin: '751007'
    // }
    // }
    
    // const copyEmployee={
    //     ...employee, 
    //     address:{...employee.address}
    // };
    //   copyEmployee.address.city="Cuttack";
    // console.log(copyEmployee);
    // console.log(employee);
    
//or===>

    const employee={
    id:101,
    name:" Aju",
    age:23,
    address: {
        city: "BBSR",
        pin: '751007'
    }
    }
    const copEmployee2=structuredClone(employee)
   copEmployee2.address.city="Sambalpur";
    console.log(copEmployee2);
    console.log(employee);
    

