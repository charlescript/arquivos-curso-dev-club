/**
 *  Escreva uma função onde, você chame uma função, e ela diga a hora exata!
 */


function hora_atual(){
    const data_atual = new Date();
   
    return console.log(` ${data_atual.getHours()} horas e ${data_atual.getMinutes()} minutos`);
}


hora_atual();