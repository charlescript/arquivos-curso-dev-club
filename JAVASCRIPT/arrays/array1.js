/**
 *   ARRAY MÉTODOS
 * 
 *   push
 *   lenght
 *   sort
 *   delete
 * 
 *   splice (unir / ligar)
 *   slice (fatiar)
 *   pop
 *   shift
 */



const students = ['João', 'Maria', 'Pedro', 'Carla', 'Bia', 'Maurício'];

students.push('Charles');
students.push('Italo');
students.push('Leonardo');
//delete students[5]

//console.log("Length:" + students.length);
//console.log("Sort: " + students.sort());
//console.log("Splice: " + students.splice(2,1,'Teste'));

//const newStudents = students.slice(0,2);
//console.log(newStudents);

students.shift();
//students.pop();


console.log(students);