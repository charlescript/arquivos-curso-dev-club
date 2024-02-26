/**
 * 
 *  CLASSES
 * 
 */


// const person1 = {
//     name: "Charles",
//     age: 28,
//     talk: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

class Person {
    name;
    age;

    talk() {
        console.log(`Hello my name is ${this.name} and i have ${this.age} years old`);
    }
}


const person1 = new Person();
const person2 = new Person();
const person3 = new Person();

person1.name = "Charles";
person1.age = 28;

person1.talk();