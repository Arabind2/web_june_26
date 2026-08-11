let id=setInterval(()=>{
console.log("Hello world")
},2000);

setTimeout(()=>{
    clearInterval(id);
},12000);