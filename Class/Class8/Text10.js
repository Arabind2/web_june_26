//Example-1
let obj=[10,20,30,40,50];
let ten=obj.every((el)=> (el%10)==0);
console.log(ten);

//Example-2
let num=[34,76,64,3,42,4];

let min=num.reduce((el,dm)=>{
    if (dm<el) {
      return dm;  
    } else {
      return el;  
    }
});
console.log(min);