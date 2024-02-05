/**
 *  Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente:
 * 
 *  -- Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES
 *  -- Todos os números são pares => TODOS OS NÚMEROS SÃO PARES
 */

let numbers = [3, 3, 5, 8];
let results = [];

function verifica_par_impar(number){

    if( (number%2) === 0){
        return "par";
    }
    else {
        return "impar";
    }
}

for(let cont = 0; cont < numbers.length; cont++ ){
    //verifica_par_impar(numbers[cont]);
    results.push(verifica_par_impar(numbers[cont]));
}

if (results.every(result => result === "par")) {
    console.log("TODOS OS NÚMEROS SÃO PARES");
} else if (results.every(result => result === "impar")) {
    console.log("TODOS OS NÚMEROS SÃO ÍMPARES");
}

console.log(results);