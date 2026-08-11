const Student={
    name:"Arabind",
    age:21,
    eng:45,
    math:78,
    phy:91,
     go(){
let avg=(this.eng+this.math+this.phy)/3;
console.log(avg);

    }
}
Student.go();