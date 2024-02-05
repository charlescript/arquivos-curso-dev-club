/**
 *   A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos.
 *   A prefeitura deseja coletar dados e saber:
 *      
 *      - Média do salário da população;
 *      - Média do número de filhos;
 *      - Maior salário;
 *      - O final da leitura 
 *     
 */

const people = [
    {
        name: "Natanael",
        numberOfChildren: 2,
        salary: 2000
    },

    {
        name: "Gabriel",
        numberOfChildren: 3,
        salary: 3000
    },

    {
        name: "Ismael",
        numberOfChildren: 5,
        salary: 4000
    },

    {
        name: "Leticia",
        numberOfChildren: 2,
        salary: 3500
    },

    {
        name: "Daniela",
        numberOfChildren: 4,
        salary: 6000
    },

    {
        name: "Glauber",
        numberOfChildren: 1,
        salary: 12000
    },

    {
        name: "Fernanda",
        numberOfChildren: 0,
        salary: 2000
    },
]


//----------------------------------------------------------
function media_salario(people){

    let total = 0;

    for(let cont = 0; cont < people.length; cont++){
        total += people[cont].salary;
    }

    let media = total / people.length;

    return media.toFixed(0);
}
//----------------------------------------------------------


function media_filhos(people){

    let total = 0;

    for(let cont = 0; cont < people.length; cont++){
        total += people[cont].numberOfChildren;
    }

    let media = total / people.length;

    return media.toFixed(0);
}

//----------------------------------------------------------

function verifica_maior_salario(people){
    let maior = 0;
    let nome = null;

    for(let i=0; i < people.length; i++){
       if(people[i].salary > maior){
            maior = people[i].salary;
            nome = people[i].name;
       }
    }

    return `O maior salário pertence a ${nome} recebendo -> R$ ${maior}`;
}

//----------------------------------------------------------

function coleta_dados() {
    console.log(`Média salarial: ${media_salario(people)}`);
    console.log(`Média de filhos: ${media_filhos(people)}`);
    console.log(`${verifica_maior_salario(people)}`);
}

//----------------------------------------------------------

coleta_dados();