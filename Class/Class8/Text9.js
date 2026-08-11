let number= [1,3,54,77,8,34,12];

let max=number.reduce((res,val)=>{
    if(res<val){
return val;
    }else{
        return res;
    }
});

console.log(max);

