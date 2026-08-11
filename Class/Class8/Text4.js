let student=[
    {
        name: "Arabind",
        marks:76.98
    },
     {
        name: "Anirudh",
        marks:74.98
    },
     {
        name: "Aradhya",
        marks:76.00
    }
];

let gpa=student.map((el)=>{
    return el.marks/10;
})

console.log(gpa);
