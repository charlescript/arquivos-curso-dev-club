/**
 *   MAP
 *     - CRIA UM NOVO ARRAY, A PARTIR DO ARRAY PERCORRIDO (ARRAY ORIGINAL)
 *     - CRIA UM NOVO ARRAY, COM A MESMA QUANTIDADE DE ITENS DO ARRAY ORIGINAL
 *     - ACEITA 3 PARÂMETROS
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

const newList = list.map( (itemList) => {
    
    function verifyVip(vip){
        if(vip === true){
            return "Black";
        } else {
            return "Green";
        }
    }
   
    const newList = {
        name: itemList.name,
        vip: itemList.vip,
        sector: verifyVip(itemList.vip)
    }

    return newList;
})

console.log(newList);

