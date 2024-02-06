/**
 *  FAÇA UM PROGRAMA ONDE, VOCÊ CHAME UMA FUNÇÃO QUE CALCULE A TAXA MENSAL DE JUROS DE UM INVESTIMENTO - 
 * 
 * - Tempo em meses, que o valor está investido.
 * - A função deve RETORNAR a taxa de juros, já formatada, EX: 2,5%. Siga a formula desse video para te auxiliar com o cálculo
 * 
 *  Cálculo taxa = juros 
 *  (Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo
 */


 function calcula_taxa_juros( vl_inicial, vl_atual, tempo){

    const juros = (vl_atual - vl_inicial) / (vl_inicial * tempo);

    return console.log((juros * 100).toFixed(2) + " %");
 }


calcula_taxa_juros(500,1200,10);