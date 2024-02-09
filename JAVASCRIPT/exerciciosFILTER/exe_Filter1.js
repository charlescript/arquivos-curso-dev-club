
const list = [20, 3 , 234 , 12 , 17 , 541 , 6 , 87 , 275 ,1000 ];  // COLOCAR EM NOVO ARRAY APENAS NÚMEROS PARES E DIVISIVEIS POR 6

console.log(list);



const newList = list.filter( item => {
    
    function verifyPar(numb){

        if( (numb % 2) === 0){
            return true;
        }
        else{
            return false;
        }

    }

    function verifyDivisible(numb){

        if( (numb % 6) === 0){
            return true;
        } 
        else {
            return false;
        }

    }
    
    return  verifyPar(item) && verifyDivisible(item);
})

console.log("Abaixo números pares e divisiveis por 6")
console.log(newList);