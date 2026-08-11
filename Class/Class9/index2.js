let x= document.getElementsByClassName("demo");

console.log(x[0].innerHTML);

let y= document.getElementsByClassName("title");
y[0].style.color="red";
y[1].style.color="blue";

let z=document.getElementsByClassName("text");
for (let index = 0; index < z.length; index++) {
    z[index].style.fontsize="30px";
    
}
