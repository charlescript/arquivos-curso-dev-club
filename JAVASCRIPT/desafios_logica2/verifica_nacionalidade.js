
let people = [ 
    {
        name:'Nicolas',
        age: 25,
        nationality: 'Brasileiro'
    },

    {
        name:'Glauber',
        age: 26,
        nationality: 'Americano'
    },

    {
        name:'Natasha',
        age: 29,
        nationality: 'Spanish'
    },
]

function verifica_nacionalidade(name,nacionalidade){

    if(nacionalidade === 'Brasileiro'){
        return console.log(`${name} é ${nacionalidade} !`);
    } else if(nacionalidade != ""){
        return console.log(`${name} é ${nacionalidade}`);
    } else {
        return console.log("Nacionalidade não identificada");
    }
}

cont = 0;
for(cont = 0; cont < people.length; cont++){

    verifica_nacionalidade(people[cont].name, people[cont].nationality);

    //console.log(people[cont].name, people[cont].nationality);
}