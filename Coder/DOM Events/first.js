// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Strike is Coming";
// }

//--------------------------------------------
//const element=document.getElementById("first");
// element.onclick=function handleClick() {
//     element.textContent="Strike is coming"
// }

// element.onclick=function handleClick() {
//     element.textContent="I am the best"
// }

//----------------------------
// const element=document.getElementById("first");
// element.addEventListener("click", ()=>{
//     element.textContent="Strike is coming"
// })
// element.addEventListener("click", ()=>{
//     element.style.backgroundColor="pink"
// })
//-----------
// element.addEventListener("dblclick", ()=>{
//     element.textContent="Strike is coming"
// })
//----------
// element.addEventListener("mouseenter", ()=>{
//     element.textContent="Strike is coming"
// })

//-------------------

//----------------------------


// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I am clicked";
// })

//-------------------

// const parent = document.getElementById("parent");
// console.log(parent.children);

// function handleClick(e){
//    e.target.textContent = "I am Clicked";
//   // parent.removeEventListener('click',handleClick);
// }

// parent.addEventListener('click',handleClick)
//-------------------------

// const parent = document.getElementById("parent");

// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent = "I am Clicked";
//     })
// }

//------------------------- //////------------------->
const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click',(e)=>{
  // console.log(e.target);
    console.log("GrandParent is clicked");
}, true)

//-------------------------------
const parent = document.getElementById("parent");
parent.addEventListener('click',(e)=>{
    //console.log(e);
    console.log("Parent is clicked");
}, true)

//-------------------------
const child = document.getElementById("child");
child.addEventListener('click',(e)=>{
    // console.log(e);
    // e.stopPropagation();
    console.log("child is clicked");
},true)

// capture phase on hai: Top se down aaoge: Us time pe event ko trigger kar diya jaayega
// capture phase off hai: Event hai usko down to up(Bubbling phase bolte hai, tab trigger kiya jaayega)