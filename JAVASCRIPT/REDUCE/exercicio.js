
const companies = [
    { name: 'Samsumg', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1983 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];

console.log("======Companias acrescentadas 10% ao valor de mercado ============================");
const companiesPlus10 = companies.map( companie => {   // ACRESCENTAR 10% DE VALOR DE MERCADO

    const companiesPlus = {
        name: companie.name,
        marketValueOriginal: `${companie.marketValue} milhões`,
        marketValue10percent: `${(companie.marketValue * 1.1).toFixed(1)} milhões com 10% de aumento`
    }
    return companiesPlus;
})

console.log(companiesPlus10);
//---------------------------------------------------------------------------------------------------------
console.log("=============================================================================================");
console.log("======Companias fundadas antes de 2000=======================================================");
console.log("=============================================================================================");

const companiesOld = companies.filter( oldCompanie => {
    return oldCompanie.foundedOn < 2000;
})

console.log(companiesOld);

//---------------------------------------------------------------------------------------------------------
console.log("=============================================================================================");
console.log("===== Valor de mercado de todas as companias fundadas antes de 2000=================");


const sumValueMarket = companiesOld.reduce( ((acc, current) => (acc + current.marketValue)) , 0);
console.log(sumValueMarket + " Milhões -> total do valor de mercado de todas as companias fundadas antes de 2000");