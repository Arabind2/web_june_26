let arr=[2,4,67,789,94,23,24];
let num=5;

function call(arr,num){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]>num){
            console.log(arr[index]);
        }
        
    }
}

call(arr,num);