// //1.Question 1 (Beginner): The "Grocery List" Manager
// Scenario: You are building a grocery list manager.

// Tasks:

// Create an array called groceryList with the items: "milk", "eggs", "bread".

// Use the push() method to add "butter" to the end of the list.

// Use the unshift() method to add "apples" to the beginning of the list.

// Use the pop() method to remove the last item and store it in a variable called lastItem.

// Use the slice() method to create a new array called breakfastItems that contains only the first two items of the updated list.

// Console.log the final groceryList and breakfastItems.
//-------------------------------------------------------------------------------------------
// 1.Answer

// const arr=[1,2,3,4,5]
// let num=[];
// arr.forEach(num=>num*2);
// console.log(num);

//-------------
// const groceryList=["milk","eggs", "breads"]
// groceryList.push("butter");
// console.log(groceryList);

// groceryList.unshift("apples");
// console.log(groceryList);

// const lastItem=groceryList.pop()
// console.log(lastItem);

// const breakfastItems=groceryList.slice(0,2)
// console.log(breakfastItems);

//-----------------------------
//============================================================================================
//2.Question

// Question 2 (Intermediate): The "Inventory" Filter & Transform
// Scenario: You have an array of product objects. You need to find expensive items and give them a discount.

// javascript
// const products = [
//   { name: "Laptop", price: 1200, inStock: true },
//   { name: "Mouse", price: 25, inStock: true },
//   { name: "Monitor", price: 300, inStock: false },
//   { name: "Keyboard", price: 100, inStock: true },
// ];
// Tasks:

// Use the filter() method to create a new array called availableProducts containing only items where inStock is true.

// From availableProducts, use the map() method to create an array called discountedPrices that returns a new array of strings like this: "Laptop: $1080" (apply a 10% discount to the price).

// Use the reduce() method to calculate the total value of all in-stock items (before the discount).

// Use the find() method to get the first product whose price is greater than $100.
//--------------------------------------------------------------------------------------------------------------------
//2. Answer
//----------
// const products = [
//   { name: "Laptop", price: 1200, inStock: true },
//   { name: "Mouse", price: 25, inStock: true },
//   { name: "Monitor", price: 300, inStock: false },
//   { name: "Keyboard", price: 100, inStock: true },
// ];
// const availableProducts=products.filter(Stock=>(Stock.inStock)==true);
//  console.log(availableProducts);

//  const discountedPrices=availableProducts.map(product=>{
//     const discountedPrice=product.price*0.9;
//     return `${product.name} : ${discountedPrice}` 
//  })
//  console.log(discountedPrices);

// const totalValue = availableProducts.reduce((prev, curValue) => prev + curValue.price, 0);
// console.log(totalValue); 

// const findvalue=availableProducts.find(prices=>prices.price>100);
// console.log(findvalue);

//------------------------------
//==================================================================================================================
//3. Question

// Question 3 (Advanced): The "Data Pipeline" (Chaining Methods)
// Scenario: You receive a raw list of user scores. You need to clean the data and generate a report.

// javascript
// const scores = [45, 12, 88, 91, 34, 67, 82, 55, 73, 99, 20, 61];
// Tasks (must be done using method chaining - one line or clean sequence):

// Filter out any scores below 50.

// Add a bonus of 5 points to the remaining scores using map().

// Sort the resulting scores in descending order (highest first).

// Use slice() to keep only the top 3 scores.

// Use reduce() to calculate the average of these top 3 scores.

// Expected output: The average of the top 3 scores after the bonus.

//-----------------------------------------------------------------------------

//3. Answer
//-------------
// const scores = [45, 12, 88, 91, 34, 67, 82, 55, 73, 99, 20, 61];

// const score=scores.filter(num=> num>=50)
//             .map(num2=>num2+5)
//             .sort((a,b)=> b-a)
//             .slice(0,3)
//             .reduce((sum, score, index, array) => 
//         sum + score / array.length, 0
//     );
// console.log(score);

//------------------------------------
//======================================================

//4. Question
//---------
//  (The "Flatten & Unique" Problem):
// Task: Write a function called mergeAndClean that takes two arrays, merges them, removes duplicates, and sorts them in ascending order. You cannot use a Set (use array methods instead).

// javascript
// const a = [3, 1, 5, 2];
// const b = [4, 5, 1, 6];

// // Expected output: [1, 2, 3, 4, 5, 6]

//----------------------------------------------------------------

//4. Answer
//----------
// const a = [3, 1, 5, 2];
// const b = [4, 5, 1, 6];

// const mergeAndClean=a.concat(b)
// console.log(mergeAndClean);
// let unique=[]
// const extract=mergeAndClean.forEach(item=>{
//     if (!unique.includes(item)) {
//         unique.push(item);
//     }
// })
// console.log(unique);
// const sort1=unique.sort((a,b)=>a-b )
// console.log(sort1);












