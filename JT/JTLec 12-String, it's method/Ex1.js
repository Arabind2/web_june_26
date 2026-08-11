let str = "JavaScript";

let result = str.substr(0, 4);

console.log(result);

console.log(str.substr(4, 6));
console.log(str.substr(4));
console.log(str.substr(-6, 6));
console.log(str.substr(-3, 2));  //"ip"
console.log(str.substr(4, -2));  //negative length is treated as 0 // ""