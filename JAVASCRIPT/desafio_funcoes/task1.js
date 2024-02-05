/**
 *  Escreva um programa onde, você chame uma função enviando um número,
 *  a função deve imprimir na tela os números de 1 até o número que focê enviou.
 */

function numbers( n1 ) {

    let cont = 0;
    let limit = n1;

    for(cont = 1; cont <= limit ; cont++ ){
         console.log(cont);
    }

}


numbers(7);