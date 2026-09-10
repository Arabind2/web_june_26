//  const personName="Ankit"
// console.log(personName);
//----------------------------

/*
1. Named Export
2. Default Export
*/
//============================

//Named Export------->
// export{personName}
//-------------

//Default Export----->
//export default personName
//----------------------


//===============================


const username="Rajesh"

function  sayHello() {
    console.log("Rajesh say's hello");
    
}

const user={
    username,
    sayHello,
    age:21,
    salary: 34000.99
}

//1. Named Export---------->
// export {username}
// export {sayHello, user}
//---------------------------

// 2.Default  Export--------->
// export default username
// export default user
//----------------------------
export default function greet(){
    console.log("hiiiiiii");
    
}
