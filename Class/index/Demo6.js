// Object
// 1
let person={
    name:"ravi",
    age:25,
    arr:[1,2,3,4],
    isMale:true,
    
    greet:function(){
        console.log("Hello");
    }

}
console.log(person.name)

// 
// or
// 2
let per1=new Object();
per1.name="Rahul";
per1.age=25;
console.log(per1.name);


// or3
function per2(name,age){
    this.name;
    this.age;

}
let p1=new per2('ramesh',25);
console.log(p1.name)

// or4

class per3{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
}
let newPerson=new per3('richard',22);
console.log(newPerson)

//or5
let per4={
    great(){
        console.log("hello");

    }
}
let newper=Object.create(per4);
newper.name='abc'
console.log(newper);
