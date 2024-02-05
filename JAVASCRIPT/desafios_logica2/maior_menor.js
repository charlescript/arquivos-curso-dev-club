let n1 = 7;
let n2 = 9;
let n3 = 15;

let maior = 0;
let menor = 0;

//-----------------------------------------------
// Identificar o maior

if(n1 > n2 && n1 > n3){
    maior = n1;
} else if(n2 > n1 && n2 > n3){
    maior = n2;
} else if(n3 > n1 && n3 > n2){
    maior = n3;
} 

//-----------------------------------------------
// Identificar o menor
if(n1 < n2 && n1 < n3){
    menor = n1;
} else if(n2 < n1 && n2 < n3){
    menor = n2;
} else if(n3 < n1 && n3 < n2){
    menor = n3;
} 
//-----------------------------------------------

console.log(`O maior -> ${maior}`);
console.log(`O menor -> ${menor}`);
