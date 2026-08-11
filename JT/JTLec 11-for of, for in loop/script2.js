// const student={
//     id:101,
//     name:"Ankit",
//     age:21,
//     course: "Java Fullstack",
//     courseFees:30000.99
// }

// let new1=Object.keys(student)
// for (const element of new1) {
//         console.log(element);
        
//     }

//     let new2=Object.values(student)
// new2.forEach(element => {
//    console.log(element);
    
// });



// const arr = ['a', 'b', 'c'];
// for (const item of arr) {
//   console.log(item);
// }


// const obj = { a: 1, b: 2, c: 3 };
// for (const key in obj) {
//   console.log(key);
// }


// const obj = { name: 'John', age: 30, city: 'NYC' };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


const scores = { math: 90, science: 85, english: 78};

function sumNumericValues(obj) {
  let sum = 0;
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'number') {
      sum += value;
    }
  }
  return sum;
}

console.log(sumNumericValues(scores))