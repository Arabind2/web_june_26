function go(){
    console.log("Hello");
    
}
const intervalid=setInterval(go,2000);
setTimeout(function () {
    clearTimeout(intervalid)
},6000)

