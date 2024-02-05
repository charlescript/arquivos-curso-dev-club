/**
 *  Escrva um programa onde, voce chame uma função mandando 
 *  2 argumentos, 2 números, e a função responde qual número é maior
 */


function verifica_maior( n1, n2){

    if( n1 !== null && n2 !== undefined){
        let maior = 0;

        if(n1 > n2) {  maior = n1;}
        else { maior = n2; }

        return console.log(`O maior número é: ${maior}`);
    }
    else {
        console.log("Revise os argumentos passados na função, certifique-se que não estão vazios.");
    }

}

verifica_maior(10);