// FAÇA UM PROGRAMA QUE GERE UM NÚMERO ALEATÓRIO ENTRE 1 E 10, ESSE NÚMERO É O NÚMERO 'GANHADOR'.
// ENTÃO ELE TAMBÉM IRÁ GERAR UM NÚMERO ALEATÓRIO ENTRE 1 E 10, E VERIFICA SE A PESSOA GANHOU OU NÃO.
// EM CASO DE TER GANHADO, MOSTRA O PRÊMIO, SE NÃO GANHOU, MOSTRA OUTRA MENSAGEM.

number_sorteado = Math.floor(Math.random() * 10) + 1;
number_escolhido_cliente = Math.floor(Math.random() * 10) + 1;

if(number_sorteado === number_escolhido_cliente){
    console.log(`O número sorteado foi ${number_sorteado} e o número escolhido foi ${number_escolhido_cliente} ==> Parabéns você ganhou o prêmio da roleta BET !`);
} else {
    console.log(`O número sorteado foi ${number_sorteado} e o número escolhido foi ${number_escolhido_cliente} ==> Infelizmente você não ganhou o prêmio!`);
}