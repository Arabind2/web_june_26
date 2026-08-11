let arr=[2,4,6,8];

let square=arr.map((el)=>{
    return el*el;
    });
console.log(square);

let sum=arr.reduce((el,es)=>{
     return el+es;
});

console.log(sum);

let avg=sum/arr.length;
console.log(avg);

