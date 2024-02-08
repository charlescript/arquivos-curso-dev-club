const students = [
    { name: "Charles", testeGrade: 9 },
    { name: "Maria", testeGrade: 7 },
    { name: "João", testeGrade: 2 },
    { name: "Bruno", testeGrade: 5 },
    { name: "Carla", testeGrade: 9 },
    { name: "Ana", testeGrade: 8 },
    { name: "Julio", testeGrade: 11 }
]

const newStudents = students.map( (student) => {

    function verifyNota(nota){

        if(nota >= 7 && nota <= 10){
            return "Approved";
        } 
        else if(nota >= 0 && nota < 7){
            return "Disapproved";
        } else {
            return "Nota inválida, consulte o suporte de TI sessão SP1 !";
        }
    }

    const newStudents = {
        name: student.name,
        nota: student.testeGrade,
        final_Result: verifyNota(student.testeGrade)
    }

    return newStudents;
})

console.log(newStudents);