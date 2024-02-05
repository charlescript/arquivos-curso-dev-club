


const calculate = ( n1, n2, operacao) => {

    switch(operacao){
        case "+":
            return console.log(`SOMA -> ${n1} + ${n2} = ${ n1 + n2 }`);
        break;

        case "*":
            return console.log(`Multiplicação -> ${n1} x ${n2} = ${ n1 * n2 }`);
        break;

        case "/":
            return console.log(`Divisão -> ${n1} / ${n2} = ${ n1 / n2 }`);
        break;

        case "-":
            return console.log(`Subtração -> ${n1} - ${n2} = ${n1-n2}`);
        break;
    }
}


calculate( 10, 10, "+");
calculate( 10, 10, "*");
calculate( 10, 10, "/");
calculate( 10, 10, "-");