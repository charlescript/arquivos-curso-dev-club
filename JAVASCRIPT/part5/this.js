/**
 *  
 *  THIS
 * 
 *  THIS EM IMGLÊS SIGNIFICA => ESTE, ESTA, ISTO
 * 
 *  NO Javascript, this faz referência:
 * 
 *  Node => module.exports
 *  Web => window
 * 
 *  Escopo:
 *      => Global -> Quando começamos a escrever nossa aplicação
 *          No contexto global, o this faz referência ao objeto global
 *          que é o objeto window no navegador de internet ou objeto global no Node.js
 * 
 *      => Local -> Por exemplo, dentro de uma função
 */

global.console.log("Hello");

const name = "Charles";  // Escopo global

console.log(this === module.exports);


function myName() {
    const myName = "Charles"; // Escopo local
}

const person = {
    name: "Charles",
    age: 25,
    talk: function() {
        console.log("Olá");
    }
}