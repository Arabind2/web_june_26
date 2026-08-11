//EXAMPLE 1
// let num=[1,2,3,4,5,6,2,3]
// let n=2;

// for(let i=0;i<num.length;i++){
//     if(num[i]==n){
//     num.splice(i,1)
//     }
   
// }
//  console.log(num)

//EXAMPLE 2
// let num=325344;

// if (num === 0) {
//     console.log(1);
// } else {
//     let count = 0;
//     let copy = num;
//     while (copy > 0) {
//         count++;
//         copy = Math.floor(copy / 10);
//     }
//     console.log(count);
// }

//Ex 3
let num3=23643;
let sum=0;
let rem=0;

while(num3>0){
    rem=num3%10;
    sum=sum+rem;
    num3=Math.floor(num3/10);

}
console.log(sum);