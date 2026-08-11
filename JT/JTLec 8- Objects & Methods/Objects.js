

const user={
    firstname:"Arabind",
    lastname:"Muduli",
    age: 21,
    isgraduate: true,
    'address':'BBSR',
    'Course-fee':30000,
    greet : function () {
        console.log("Anirudh says ", this);
        
        console.log("My full name is ", this.fullname);
        
    },
        // hello : ()=>{
        // console.log("Hello Good Morning", this)   //this is not recommended in arrow function
        // } 
add: function (a,b) {
    console.log("Sum is ", a+b);
    
}

}
//Extract complete values 
console.log("user object", user);

//Extract single value
console.log("user firstname", user.firstname);
console.log("user lastname", user.lastname);
console.log("Full name is", user.firstname,  user.lastname);

console.log("age is", user['age']);
console.log("course fee is ", user ['Course-fee']);

console.log("Fullname key is ",user.fullname); // undefined- as key is not there

//Add/ update key to object
user.fullname=" Anirudh ravichander"
user.isgraduate=false
console.log(user);
user['addhar number']=592235607148
console.log(user);

//Access methods
user.greet();
// user.hello();

user.add(100,200)



//============nested object===============

const employee={
    fullname: 'Sahil Patra',
    age: 32,
    address: {
        city: "BBSR",
        state: "Odisha",
        pin: "751007"
    }
}
console.log(employee.fullname);
console.log(employee.age);
console.log(employee.address);
console.log(employee.address.city);

employee.address=null
console.log(employee.address.city);  // it throws error because can not access null properties

console.log(employee.address?.city); //"?" use this (it is optional chaining)... it does not throws error to save program crash  








 

