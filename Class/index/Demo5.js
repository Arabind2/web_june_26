// Map
let num=[12,43,56,76];
let sq=num.map(n=>n*n);//map
let even=num.filter(n=>n%2==0);//filter

let z=num.filter((b)=>{
    return b>10;
})
console.log(even);
console.log(sq)
console.log(z)

// find
let Student=[
    {id: 1, name:'Amit'},
     {id: 2, name:'ravi'},
      {id: 3, name:'richard'}

] ;
let std=Student.find(s=>s.id=2);
console.log(std);


