const Classroom={
    name: "Class 12th",
    floor: "3rd floor",
    teacher:{
        name: "Anirudh",
        subject: "Biology",
        student:{
            name:"Arabind",
            age:21
        }
    }

}

console.log(Classroom);
console.log(Classroom.name);
console.log(Classroom.floor);
console.log(Classroom.teacher);
console.log(Classroom.teacher.name);
console.log(Classroom.teacher.subject);


console.log(Classroom.teacher.student);
console.log(Classroom.teacher.student['name']);
console.log(Classroom.teacher.student['age']);

Classroom.teacher.student=null;
console.log(Classroom.teacher.student?.age);





