/*
    == -> Igual // Ele compara o valor, mas não compara o tipo do valor
    === -> TOTALMENTE Igual // Ele verifica o tipo do dado !

    != -> Diferente // Ele compara o valor, mas não compara o tipo do valor
    !== TOTALMENTE Diferente // Ele compara o tipo do dado
*/


const firstPerson = 'João';
const secondPerson = 'Maria';

const firsNumber = 23;
const secondNumber = "23";

console.log(firstPerson == secondPerson);

console.log("Os numeros são iguais( tipo e dado )? ",firsNumber === secondNumber);

console.log("As pessoas são diferentes? ",firstPerson !== secondPerson)