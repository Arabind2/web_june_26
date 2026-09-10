//------Inline HTML attributes------>
const handleDbClick=()=>{
    console.log("Heading double clicked");
    
}

//------2. using event properties------>

const h1=document.getElementById("first-heading")
h1.onmouseover=handleOnMouseOver

function handleOnMouseOver(){
    console.log("Mouse over effect");
    
}
h1.onmouseover=handleOnMouseOver2
function handleOnMouseOver2(){
    console.log("Mouse over effect- 2nd fun");
    
}

//---------3. using  addEventListner------>
const second1= document.querySelector("#sec-heading")

second1.addEventListener("click",()=>{
    console.log("DOM Event listner clicked");
    
})

second1.addEventListener("click",handleDomEventHeadingClick)
// function handleDomEventHeadingClick(event) {
//     console.log("DOM Event Listner clicked- 2nd fun");
//     console.log("/////", event);
//     console.log("x co-ordinates", event.clientX);
//      console.log("Y co-ordinates", event.clientY);
//      console.log("event type", event.type);
//      console.log("event target", event.target);
//      console.log("event target text", event.target.innerText);
//      event.target.style.color='green'
//     // event.target.remove()
           
// }

// function handleDomEventHeadingClick(event) {
//     console.log("DOM Event Listner clicked- 2nd fun");
//     console.log("/////", event);
//     console.log("x co-ordinates", event.clientX);
//      console.log("Y co-ordinates", event.clientY);
//      console.log("event type", event.type);
//      console.log("event target", event.target);
//      console.log("event target text", event.target.innerText);
//      event.target.style.color='green'
//      event.target.remove()
           
// }
function handleDomEventHeadingClick(e) {
    console.log("DOM e Listner clicked- 2nd fun");
    console.log("/////", e);
    console.log("x co-ordinates", e.clientX);
     console.log("Y co-ordinates", e.clientY);
     console.log("e type", e.type);
     console.log("e target", e.target);
     console.log("e target text", e.target.innerText);
     e.target.style.color='green'
    // e.target.remove()
           
}


