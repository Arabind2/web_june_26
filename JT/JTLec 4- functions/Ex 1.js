//1
function greeting(){
    console.log("Hello Sir. !");
    
}
greeting();
//2
function meet(){
    console.log("Meet to Rohit Sharma");
    
}
meet();
//3
function call() {
    console.log("After 10 min , I will call you.");
    
}
call();
//4
function miss() {
    console.log("I miss You ");
    
}
miss();
//5
function love() {
    console.log("I love You .");
    
}

love();
//6
function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Arabind");
//7
function fullName(first, middle, last) {
    console.log(first + " " + middle + " " + last);
}

fullName("Arabind", "Anirudh", "Anna");

//8
function order(item, quantity) {
    console.log("You ordered " + quantity + " " + item);
}

order("Burger", 2);
//9
function welcome(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName + "!");
}
welcome("Arabind", "Muduli"); 

//10
function ageInDays(age) {
    return age * 365;
}
console.log(ageInDays(25));
//11
function discount(price, percent) {
    return price - (price * percent / 100);
}
console.log(discount(100, 20));
//12
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 3));
//13
function rectangleArea(length, width) {
    return length * width;
}

console.log(rectangleArea(5, 4));
//14
function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isEven(7));

//15
function canVote(age) {
    if (age >= 18) {
        return "You can vote!";
    } else {
        return "Too young to vote";
    }
}

console.log(canVote(20)); 