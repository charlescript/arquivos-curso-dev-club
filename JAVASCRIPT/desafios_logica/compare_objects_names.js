peoples = [
    {
        name: "Charles",
        last_name: "Santos", 
        height: 1.9,
        cpf: 12345678911,
        address: {
            state: "SP",
            city: "Santos",
            street: "Gusmão",
            number: 2757,
        }
    },

    {
        name: "Italo",
        last_name: "Ramos", 
        height: 1.75,
        cpf: 12345678911,
        address: {
            state: "SP",
            city: "Santos",
            street: "Conselheiro",
            number: 2755,
        }
    },

    {
        name: "Leonardo",
        last_name: "Marques", 
        height: 1.70,
        cpf: 12345678911,
        address: {
            state: "SP",
            city: "Santos",
            street: "Gusmão",
            number: 2756,
        }
    },

    {
        name: "Nathalia",
        last_name: "Mendes", 
        height: 1.6,
        cpf: 12345678911,
        address: {
            state: "SP",
            city: "Santos",
            street: "Barão",
            number: 3000,
        }
    },

    {
        name: "Rafaela",
        last_name: "Santos", 
        height: 1.55,
        cpf: 12345678911,
        address: {
            state: "SP",
            city: "Santos",
            street: "Ana Costa",
            number: 2759,
        }
    }
];

const compare = peoples[0].name === peoples[1].name;

const comparar = peoples[0].address.street === peoples[1].address.street;

console.log("Nomes -> ", compare);
console.log("Ruas -> ",comparar);