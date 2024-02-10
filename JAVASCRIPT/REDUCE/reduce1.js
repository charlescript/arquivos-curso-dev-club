/**
 *   REDUCE
 *      - Retorna um valor ( pde ser um novo array, um objeto, string, number, etc)
 *      - Aceita 4 parâmetros
 *          - acumulador
 *          - valor total
 *          - index
 *          - array completo
 */


const list = [1, 2, 3, 4, 5];

const sum = list.reduce( (acc, current) => {
    console.log('acumulador', acc)
    console.log('atual', current)
    console.log('========================');
    return acc + current;
}, 10)

console.log(sum);