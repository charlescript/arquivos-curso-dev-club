/**
 *   MAP
 *     - CRIA UM NOVO ARRAY, A PARTIR DO ARRAY PERCORRIDO (ARRAY ORIGINAL)
 *     - CRIA UM NOVO ARRAY, COM A MESMA QUANTIDADE DE ITENS DO ARRAY ORIGINAL
 *     - ACEITA 3 PARÂMETROS
 *          - item do array
 *          - index
 *          - array completo
 */

const numbers = [1,2,3,4];

const students = [
    { name: "Charles", age: 27 },
    { name: "Maria", age: 43 },
    { name: "João", age: 21 },
    { name: "Bruno", age: 43},
    { name: "Carla", age: 13},
    { name: "Ana", age: 20},
    { name: "Julio", age: 26}
];



// const newArray = numbers.map( (number) => {
//     // console.log(number);
//     // return number;
//     //return number * 2;
// })

// console.log(newArray);


const newStudents = students.map( (student) => {
    const newStudent = {
        name: student.name + ' da Silva',
        age: student.age - 5
    }

    return newStudent;
})

// console.log(students);
// console.log(newStudents);

const double = number => number * 2;
const toReais = number => `R$ ${number.toFixed(2)}`;


//const newArray2 = numbers.map( double )
const newArray2 = numbers.map(double).map(toReais);
console.log( newArray2);   


