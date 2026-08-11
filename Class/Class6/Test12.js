//lexical scope

function outer(){
    let x=8;
    let y=6;
    function inner(){
        console.log(x);
        console.log(y);
    }
    inner();
}
outer();

//or

function outer1(){
    function inner1(){
        console.log(a);
        console.log(b);
    }
      let a=98;
    let b=66;

    inner1();
}

outer1();
