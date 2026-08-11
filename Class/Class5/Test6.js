let stud={
    rohit:{
        batting: "right",
        1: "opener",
        type: "captain"
    },
    virat:{
        batting: "right",
        3: "1st down",
        type: "leader"
    },
    dhoni: {
        batting: "lefty",
        7: "finisher",
        type: "captain,leader"
    }
};

console.log(stud.rohit["1"]);

console.log(stud.virat["type"]);

console.log(stud.dhoni["7"]);