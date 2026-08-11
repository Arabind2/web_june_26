// String
//===========
// let a= "Arbinda"
// let b= 'Muduli'
// let c= "lorem ipsum aa d akda laksdlasdlkal adlasdlkaslkas "
// concatenation
// console.log("lorem ipsum aa d akda" +a + b+ "laksdlasdlkal adlasdlkaslkas ")
 //console.log(`lorem ipsum aa d akda ${a}    ${b} laksdlasdlkal adlasdlkaslkas `)

// Escapping====
//console.log("lorem ipsum aa d akda \"Hello\"")

// Template Literals
// let d= `Arbinda`
// console.log(`Hello ${d}`)

// String length
// let d= `Arbinda`
// console.log(d.length)

// Indexing
// console.log(d[0])

// String is immutable
// Values cannot be changed, every method will return a new string

// Read from left to right.

// let name = "Nutun"
// let age="24"

// console.log(`My Name is ${name} and age is ${age}`)

// let c= "Lorem Ipsum aa d akda laksdlasdlkal adlasdlkaslkas "
// console.log(c.replaceAll(" ","Nutun"))




//=========================================================
// Question========
// Project name: Slug Generator
// Project requirements:
// •	Use only concepts already taught in this chapter and earlier chapters.
// •	Run the final code in Node.js or a browser console.
// •	Print clear output so the learner can verify the result.
// Project steps:
// •	Create simple input values.
// •	Apply the chapter concept.
// •	Print the final result.
// •	Compare with expected output.


// let title = " Beginner JavaScript Guide ";
// Expected output:
// beginner-javascript-guide


//answer=>
//   let title = " Beginner JavaScript Guide ";
// let newTitle=title.trim().toLowerCase().replaceAll(" ", "-")
// console.log(newTitle);
//===================================================

// CharAt()
// let name= `Arbinda`
// console.log(name.charAt(3))
// difference between CharAt() and indexing (edge case)
// console.log(name[10]) //undefined
// console.log(name.charAt(10)) //""

//Strings are immutable
// Immutable means once a string value exists, its individual characters cannot be changed.
// let text = "Hello"
// text[0]="y"
// console.log(text)


// text = "Y"+text.slice(1);
// console.log(text)

// console.log(text.slice(2))


//concatenation
// console.log("Age" + 10)
// console.log(25 + 10)

// console.log("25" + 10)
// console.log("25" - 10)
// console.log(25 - "10")
// Why?
// The + operator has special string-concatenation behavior.
// The - operator does not concatenate strings, so JavaScript attempts numeric conversion.
// This is one reason experienced developers are careful with implicit type coercion.


// Template Literal Expressions
// ``
// const a = 10;
// const b = 20;
// const result = "Total :" + (a + b)
// const result = ` Total: ${a + b}`
// console.log(result)

// function getName() {
//   return "Rahul";
// }

// console.log(`Hello ${getName()}`);

// Escape Characters--
// const text = "Hello\nWorld";
// console.log(text)

//Methods
// toUpperCase()
// const text = "Hello";

// console.log(text.toUpperCase());

// text.toUpperCase();
// console.log(text);
// Why?
// Because strings are immutable.
// The method creates a new string.

//toLowerCase()
// console.log(text.toLowerCase());

//Common production use:
// let userInput="ABC@GMAIL.COM"
// const email = userInput.trim().toLowerCase();
// console.log(email)
// For example, normalizing an email address for comparison.
// Important: Lowercasing is not universally equivalent to canonicalizing every kind of identifier; case rules depend on the data being handled.

//TRIM()
// const text = "           Hello     ";
// console.log(text.trim())
// Useful for- forms

//includes() - Checks whether a string contains another string.
// const message = "JavaScript is powerful";
// console.log(message.includes("Java"));
// Case-sensitive:
// console.log("Hello".includes("hello"))


//startsWith()
// const url = "https://example.com";
// console.log(url.startsWith("http"));

//endsWith()
// const filename = "report.pdf";
// console.log(filename.endsWith("df"));

//indexOf()-- returns index of first character
// const text = "JavaScript";
// console.log(text.indexOf("JavaScript"));
// console.log(text.indexOf("python"));

// Important production mistake
// if (text.indexOf("va") === true) {
//     console.log("hi")
// }
// if (text.indexOf("Java") !== -1) {
// }

// slice()
// const text = "JavaScript";
// console.log(text.slice(0, 4));
// JavaScript
// ^^^^
// 0   1   2   3

// const text = "JavaScript";
// console.log(text.slice(2));
// console.log(text.slice(-2));
//if single value passed then it will remove those value