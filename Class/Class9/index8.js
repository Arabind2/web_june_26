let button=document.querySelector(".btn");

button.addEventListener("click",()=>{
    alert("I clicked on this");
})

let button2=document.querySelector(".btn");

button2.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b>Yeah , I got it</b>"
})

button.addEventListener("contextmenu",()=>{
    alert("Don't hack us by right click please");
})
setInterval(() => {
    document.querySelector(".box").style.background="red"
}, 3000);

