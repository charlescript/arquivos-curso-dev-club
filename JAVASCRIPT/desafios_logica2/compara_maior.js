// Faça um programa que compare o número com 10 e 
// imprimme na tela "o numero é maior, o número é menor o número é igual"

let number = 12;
let comparador = 11;

if(number > comparador){
    console.log(`O ${number} é maior que ${comparador}`);
} else if (number < comparador){
    console.log(`O ${number} é menor que ${comparador}`);
} else if( number === comparador){
    console.log(`O ${number} é igual ao ${comparador}`);
}