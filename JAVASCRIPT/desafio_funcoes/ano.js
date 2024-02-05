/**
 *  Escreva uma função onde, você chame uma função, e ela diga o ano exato em que estamos
 */


function ano_atual(){
    const data_atual = new Date();
   
    return console.log( "Ano: " ,data_atual.getFullYear());
}


ano_atual();