//1.===
// function sumAll(...params) {
//     let sum=0;
//     params.forEach(num=>sum+=num)
//     return sum;
// }





// console.log(sumAll(10, 20, 30));        
// console.log(sumAll(5, 10, 15, 20));  
// console.log(sumAll(1, 2, 3, 4, 5));     
// console.log(sumAll());  
//===============================


// function sumAll(...params) {
//   return params.reduce((Prev,cur)=>
//     Prev+cur
//    ,0)
// }
// console.log(sumAll(10, 20, 30));        
// console.log(sumAll(5, 10, 15, 20));  
// console.log(sumAll(1, 2, 3, 4, 5));     
// console.log(sumAll()); 
//==============================
//2.===
// const fruits=["apple", "banana", "orange"];

// const vegetables=["carrot", "brocoli", "spinach"]

// const grocerylist=[...fruits,...vegetables];
// console.log(grocerylist);
// grocerylist.unshift("mango");
// console.log(grocerylist);
// grocerylist.push("potato");
// console.log(grocerylist);

// const duplicateFruits=[...fruits, "grape"]
// console.log(duplicateFruits);
//======================================================

//3===
//using arguments
// function calculateAverage(params) {
//     let element=0;
//     for (let index = 0; index < arguments.length; index++) {
//          element+= arguments[index];
        
//     }
//     return element/arguments.length;
    
// }
// console.log(calculateAverage(20,30,40))


//using rest

// function calculateAverageRest(...params) {
//   return params.reduce((prev,cur)=> prev+cur,0)/params.length
// }

// console.log(calculateAverageRest(20,30,40))

//================================
//4.==

// const user={
//   name: 'John',
//   age: 30,
//   email: 'john@example.com'
// };

// const address={
//   street: '123 Main St',
//   city: 'New York',
//   country: 'USA'
// };

// const preferences={
//   theme: 'dark',
//   notifications: true,
//   language: 'en'
// };

// const userProfile={...user, ...address, ...preferences};
// console.log(userProfile);
// const copyUser={...user, age:31}
// console.log(copyUser);

//========================

//destructuring question==>
    
const data = {
  status: "success",
  user: {
    id: 1,
    profile: {
      fullName: "Sarah Lee",
      preferences: {
        theme: "dark",
        notifications: true
      }
    }
  }
};

const { 
  user: { 
    profile: { 
      fullName, 
      preferences: { theme } 
    } 
  } 
} = data;

console.log(fullName, theme);