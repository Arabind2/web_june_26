function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("It gave us "+args[i]);
    }
};
sum(1,2,3,4);

function min(){
    console.log(arguments);

};
min();

function add(...ar){
    return ar.reduce((add,el)=>add+el);
};
console.log(add(3,6));