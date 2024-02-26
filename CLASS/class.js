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

    constructor(name, age){
        //console.log(`Hello ${name}`)

        this.name = name
        this.age = age
    }

    // name;
    // age;

    talk() {
        console.log(`Hello my name is ${this.name} and i have ${this.age} years old`);
    }
}


const person1 = new Person("Charles", 28);
const person2 = new Person("Maria", 33);
const person3 = new Person("Larissa", 27);



person1.talk();
person2.talk();
person3.talk();