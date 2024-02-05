/**
 *  FAÇA UM PROGRAMA ONDE LEIA UM NÚMERO E DIA SE ELE É : 
 *  - ímpar
 *  - par
 *  - é um número primo e impar
 *  - é par e divisivel por 5
 */

let number = 5;


if((number % 2) != 0) {
    console.log(`${number} -> ÍMPAR`);
} 
if( (number % 2) === 0 ) {
    console.log(`${number} -> É PAR`);
} 
if( ((number % 2) != 0) && ((number % 1) === 0) && ((number % number) === 0) ){
    console.log(`${number} -> NÚMERO ÍMPAR E TAMBEM É PRIMO.`);
}
if( ((number % 2 ) === 0) && ((number % 5) === 0) ){
    console.log(`${number} -> NÚMERO PAR E TAMBEM É DIVISIVEL POR 5.`);
}
