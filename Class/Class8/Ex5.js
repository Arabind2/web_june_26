function mergeObject(obj1,obj2){
return {...obj1,...obj2};
}

let obj1={
    name: "Arshdeep",
    type: "Bowler"
};
let obj2={
    play:"Cricket",
    city:"Punjab"
}
let combine=mergeObject(obj1,obj2);
console.log(combine);
