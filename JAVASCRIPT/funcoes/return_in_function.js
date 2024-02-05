

function sum_void( number1, number2){  // COMO ESSA FUNÇÃO NÃO TEM RETURNO ela é do tipo VOID, somente executa algo
    console.log(`${number1} + ${number2} = ${number1 + number2}`);
}



function sum( number1, number2){
    return console.log(`${number1} + ${number2} = ${number1 + number2}`);
}

sum(10,12) //INVOCA A FUNÇÃO, CHAMA A FUNÇÃO // invoke or call