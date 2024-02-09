const companies = [
    { name: 'Samsumg', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1983 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];

// Retornar apenas as empresas que foram fundadas depois de 1975 e que tenham mais de 2 milhões de dolares de valor de mercado


const companiesRequest = companies.filter( companie => {

    return companie.foundedOn > 1975 && companie.marketValue > 2;

})

console.log(companiesRequest );