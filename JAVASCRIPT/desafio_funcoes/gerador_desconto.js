// ESCREVA UM PROGRAMA ONDE, VOCÊ CRIA UMA FUNÇÃO GERADORA DE DESCONTO

/**
 *  - A FUNÇÃO ACEITA 4 PARAMETROS (
 *         - Nome do cliente, 
 *         - valor total da compra, 
 *         - um booleano que diz se é a primeira compra do cliente ou não,
 *         - um booleano que diz se o cliente vai pagar a vista)
 * 
 *    OS DESCONTOS FUNCIONAM DA SEGUINTE FORMA:
 * 
 *  - SE É A PRIMEIRA COMPRA DO CLIENTE, PAGAR A VISTA, E A COMPRA FOR MAIOR QUE R$-1000 => 30% DE DESCONTO
 *  
 *  - SE É A PRIMEIRA COMPRA DO CLIENTE, PAGAR A VISTA E A COMPRA FOR MENOR QUE 1000 E MAIOR QUE 500 => 25% DE DESCONTO
 * 
 *  - SE É A PRIMEIRA COMPRA DO CLIENTE, PAGAR A VISTA E A COMPRA FOR MENOR QUE 500 => DESCONTO DE 20%
 * 
 *  - SE É A PRIMEIRA COMPRA DO CLIENTE, NÃO PAGAR A VISTA, E A COMPRA FOR MAIOR QUE 1000 => 20% DE DESCONTO 
 * 
 *  - SE É A PRIMEIRA COMPRA DO CLIENTE, NÃO PAGAR A VISTA, E A COMPRA FOR MENOR QUE 1000 E MAIOR QUE 500=> 15% DE DESCONTO 
 * 
 *  - SE É A PRIMEIRA COMPRA DO CLIENTE, NÃO PAGAR A VISTA, E A COMPRA FOR MENOR QUE 500 => 10% DE DESCONTO 
 *  
 *  - SE NÃO É A PRIMEIRA COMPRA DO CLIENTE, PAGAR A VISTA, E A COMPRA FOR MAIOR  QUE 1000 => 20% DESCONTO
 * 
 *  - SE NÃO É A PRIMEIRA COMPRA DO CLIENTE, PAGAR A VISTA, E A COMPRA FOR MENOR QUE 1000 E MAIOR QUE 500 => 15% DESCONTO
 * 
 *  - SE NÃO É A PRIMEIRA COMPRA DO CLIENTE, PAGAR A VISTA, E A COMPRA FOR MENOR QUE 500 => 10% DESCONTO
 * 
 *  - SE NÃO É A PRIMEIRA COMPRA DO CLIENTE, NÃO PAGAR A VISTA E COMPRA FOR MAIOR QUE 1000 => 10% DE DESCONTO
 * 
 *  - SE NÃO É A PRIMEIRA COMPRA DO CLIENTE, NÃO PAGAR A VISTA E COMPRA FOR MENOR QUE 1000 E MAIOR QUE 500 => 5% DE DESCONTO
 */


function desconto(nome_cliente, vl_compra, first_compra_bool , pag_avista_bool){

    if( nome_cliente !== null && vl_compra !== null && first_compra_bool !== null && pag_avista_bool !== null){

        // SE É A PRIMEIRA COMPRA DO CLIENTE, PAGAR A VISTA, E A COMPRA FOR MAIOR QUE R$-1000 => 30% DE DESCONTO
        if( first_compra_bool == true && pag_avista_bool == true && vl_compra > 1000){
            let desconto = vl_compra - (vl_compra * 0.3);
            return console.log(`Cliente ${nome_cliente} teve desconto de 30% o valor da compra foi reajustado para R$ ${desconto.toFixed(2)}`);
        } 
        // SE É A PRIMEIRA COMPRA DO CLIENTE, PAGAR A VISTA E A COMPRA FOR MENOR QUE 1000 E MAIOR QUE 500 => 25% DE DESCONTO
        else if(first_compra_bool == true && pag_avista_bool == true && vl_compra <= 1000 && vl_compra > 500 ){
            let desconto = vl_compra - (vl_compra * 0.25);
            return console.log(`Cliente ${nome_cliente} teve desconto de 25% o valor da compra foi reajustado para R$ ${desconto.toFixed(2)}`);
        }
        // SE É A PRIMEIRA COMPRA DO CLIENTE, PAGAR A VISTA E A COMPRA FOR MENOR ou igual QUE 500 => DESCONTO DE 20%
        else if(first_compra_bool == true && pag_avista_bool == true && vl_compra <= 500){
            let desconto = vl_compra - (vl_compra * 0.2);
            return console.log(`Cliente ${nome_cliente} teve desconto de 20% o valor da compra foi reajustado para R$  ${desconto.toFixed(2)}`);
        }
        // SE É A PRIMEIRA COMPRA DO CLIENTE, NÃO PAGAR A VISTA, E A COMPRA FOR MAIOR QUE 1000 => 20% DE DESCONTO 
        else if(first_compra_bool == true && pag_avista_bool == false && vl_compra > 1000){
            let desconto = vl_compra - (vl_compra * 0.2);
            return console.log(`Cliente ${nome_cliente} teve desconto de 20% o valor da compra foi reajustado para R$ ${desconto.toFixed(2)}`);
        }
        // SE É A PRIMEIRA COMPRA DO CLIENTE, NÃO PAGAR A VISTA, E A COMPRA FOR MENOR QUE 1000 E MAIOR QUE 500=> 15% DE DESCONTO 
        else if(first_compra_bool == true && pag_avista_bool == false && vl_compra <= 1000 && vl_compra >= 500){
            let desconto = vl_compra - (vl_compra * 0.15);
            return console.log(`Cliente ${nome_cliente} teve desconto de 15% o valor da compra foi reajustado para R$ ${desconto.toFixed(2)}`);
        } 
        // SE É A PRIMEIRA COMPRA DO CLIENTE, NÃO PAGAR A VISTA, E A COMPRA FOR MENOR QUE 500 => 10% DE DESCONTO 
        else if(first_compra_bool == true && pag_avista_bool == false && vl_compra < 500){
            let desconto = vl_compra - (vl_compra * 0.1);
            return console.log(`Cliente ${nome_cliente} teve desconto de 10% o valor da compra foi reajustado para R$ ${desconto.toFixed(2)}`);
        }
        // SE NÃO É A PRIMEIRA COMPRA DO CLIENTE, PAGAR A VISTA, E A COMPRA FOR MAIOR  QUE 1000 => 20% DESCONTO
        else if(first_compra_bool == false && pag_avista_bool == true && vl_compra > 1000){
            let desconto = vl_compra - (vl_compra * 0.2);
            return console.log(`Cliente ${nome_cliente} teve desconto de 20% o valor da compra foi reajustado para R$ ${desconto.toFixed(2)}`);
        }
        // SE NÃO É A PRIMEIRA COMPRA DO CLIENTE, PAGAR A VISTA, E A COMPRA FOR MENOR QUE 1000 E MAIOR QUE 500 => 15% DESCONTO
        else if(first_compra_bool == false && pag_avista_bool == true && vl_compra <= 1000 && vl_compra >= 500){
            let desconto = vl_compra - (vl_compra * 0.15);
            return console.log(`Cliente ${nome_cliente} teve desconto de 15% o valor da compra foi reajustado para R$ ${desconto.toFixed(2)}`);
        }
        // - SE NÃO É A PRIMEIRA COMPRA DO CLIENTE, PAGAR A VISTA, E A COMPRA FOR MENOR QUE 500 => 10% DESCONTO
        else if(first_compra_bool == false && pag_avista_bool == true && vl_compra < 500){
            let desconto = vl_compra - (vl_compra * 0.1);
            return console.log(`Cliente ${nome_cliente} teve desconto de 10% o valor da compra foi reajustado para R$ ${desconto.toFixed(2)}`);
        }
        // SE NÃO É A PRIMEIRA COMPRA DO CLIENTE, NÃO PAGAR A VISTA E COMPRA FOR MAIOR QUE 1000 => 10% DE DESCONTO
        else if(first_compra_bool == false && pag_avista_bool == false && vl_compra > 1000){
            let desconto = vl_compra - (vl_compra * 0.1);
            return console.log(`Cliente ${nome_cliente} teve desconto de 10% o valor da compra foi reajustado para R$ ${desconto.toFixed(2)}`);
        }
        // SE NÃO É A PRIMEIRA COMPRA DO CLIENTE, NÃO PAGAR A VISTA E COMPRA FOR MENOR QUE 1000 E MAIOR QUE 500 => 5% DE DESCONTO
        else if(first_compra_bool == false && pag_avista_bool == false && vl_compra <= 1000) {
            let desconto = vl_compra - (vl_compra * 0.05);
            return console.log(`Cliente ${nome_cliente} teve desconto de 10% o valor da compra foi reajustado para R$ ${desconto.toFixed(2)}`);
        }

    } else {
        console.log("Revise os parametros, pois podem haver dados pendenetes!")
    }

}


desconto("Teste", 450, 0, 1);
desconto("Charles", 1500, 1, 1);
desconto("Tatiana", 900, 1, 1);
