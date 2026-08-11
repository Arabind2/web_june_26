let num=[2,5,6,4,3];
let arrayAverage=(num)=>{
    let total=0;
    for(let n of num){
        total+=n;
    }
    return total/num.length;
};
console.log(arrayAverage(num));
