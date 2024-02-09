const students = [
    { name: "Charles", testeGrade: 9 },
    { name: "Maria", testeGrade: 7 },
    { name: "João", testeGrade: 2 },
    { name: "Bruno", testeGrade: 5 },
    { name: "Carla", testeGrade: 9 },
    { name: "Ana", testeGrade: 8 },
    { name: "Julio", testeGrade: 10 }
]


const appovedStudent = students.filter( student => {
    return student.testeGrade >=7 && student.testeGrade<=10;
})

const disapprovedStudents = students.filter( student => {
    return student.testeGrade < 7;
})


console.log(appovedStudent);

console.log(disapprovedStudents);