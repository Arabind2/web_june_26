// Scope

// 1.Global scope
let x=45;
function test(){
    console.log(x);

}
test();

// 2.Local Scope

function Local(){
    let c=18;
    console.log('inside local',c);
}
Local();
