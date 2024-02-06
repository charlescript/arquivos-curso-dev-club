

/**
 *   For each
 */

const students = [
    { name: "Charles", age: 27 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21 },
    { name: "Bruno", age: 43},
    { name: "Carla", age: 13},
    { name: "Ana", age: 20},
    { name: "Julio", age: 26}
];


students.forEach( (student) => {
    console.log(student.name +" tem "+ student.age + " anos ")
})


// students.forEach( (student, index) => {
//     console.log(student, index);
// })



// students.forEach( (student, index, array) => {
//     console.log(array);
// })

let allStudentsAge = 0;


students.forEach( (student, index) => {
    allStudentsAge += student.age;
})

let averageAge = allStudentsAge / students.length;
console.log(`A média de idade dos alunos é: ${averageAge.toFixed(1)}`);