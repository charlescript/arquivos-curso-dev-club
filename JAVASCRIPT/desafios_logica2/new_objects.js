// CRIE 5 OBJETOS E AO RODAR O PROGRAMA, DEVE IMPRIMIR SE A PESSOA É APROVADA OU NÃO NO PROCESSO,
// A PESSOA DEVE SER MAIOR DE IDADE E BRASILEIRA PARA SER APROVADA.

let peoples = [
    {
        nome: "Renato",
        idade: "29",
        sexo: "male",
        profissao: "Treinador físico",
        nacionalidade: "Brasileiro(a)"
    },

    {
        nome: "Paulo",
        idade: "42",
        sexe: "male",
        profissao: "médico",
        nacionalidade: "Brasileiro(a)"
    },

    {
        nome: "Ramom",
        idade: "28",
        sexe: "male",
        profissao: "Fisiculturista",
        nacionalidade: "Brasileiro(a)"
    },

    {
        nome: "CBUM",
        idade: "28",
        sexe: "male",
        profissao: "Fisiculturista",
        nacionalidade: "Americano(a)"
    },

    {
        nome: "Stalone",
        idade: "60",
        sexe: "male",
        profissao: "Ator",
        nacionalidade: "Americano(a)"
    },

]

function verifica_nacionalidade(idade, nacionalidade){
    let BR = "Brasileiro(a)";

    if(idade >= 18 && nacionalidade === BR){
        return console.log("Está aprovado(a)");
    } else{
        return console.log("Pessoa não está aprovada");
    }
}

for(let cont = 0; cont < peoples.length; cont++){
    console.log("Nome: ", peoples[cont].nome );
    console.log("Idade: ", peoples[cont].idade );
    console.log("Nacionalidade: ", peoples[cont].nacionalidade );
    console.log("Profissão: ", peoples[cont].profissao );
    verifica_nacionalidade(peoples[cont].idade, peoples[cont].nacionalidade);
    console.log("-------------------------- ");
}


