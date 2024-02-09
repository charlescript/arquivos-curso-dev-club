/**
 *    -Cria um novo array, a partir do array percorrido (array original)
 *    - Cria um novo array APENAS com os elementos filtrados
 *     - Aceita 3 parâmetros
 *          - item do array
 *          - index
 *          - array completo
 */



const list = [
    { name: "Charles", vip: true },
    { name: "Maria", vip: false },
    { name: "João", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false }
];

const justVips = list.filter( client => {
    
    return client.vip // Só retorna os clients que são vips (true)
})

console.log(justVips);

// const newList = list.map( (itemList) => {
    
//     function verifyVip(vip){
//         if(vip === true){
//             return "Black";
//         } else {
//             return "Green";
//         }
//     }
   
//     const newList = {
//         name: itemList.name,
//         vip: itemList.vip,
//         sector: verifyVip(itemList.vip)
//     }

//     return newList;
// })

// console.log(newList);

