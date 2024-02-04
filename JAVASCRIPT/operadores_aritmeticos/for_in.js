/**
 *  Estrutura de Repetição: FOR IN
 */


const student = {
    name: "Carlos",
    age: 26,
    genre: "male"
}

// console.log(student["name"]);

for(let property in student){
    console.log(`${property}: ${student[property]}`);
}

