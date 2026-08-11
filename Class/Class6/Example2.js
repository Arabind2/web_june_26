let str='degdeuueddd';

function go(str){
    let ans="";
for (let index = 0; index < str.length; str++) {
   let char=str[index];
    if (ans.indexOf(char)== -1 ) {
       ans+=char; 
    }
    
}
return ans;
}

console.log(go(str)); 