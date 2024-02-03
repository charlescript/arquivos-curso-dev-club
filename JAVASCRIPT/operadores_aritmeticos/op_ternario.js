

const rain = true;

//const umbrela = rain ? 'levar guarda chuva' : 'deixar guarda chuva';

let balance = true;
let isNotBlocked = true;
let accountExist = true;

const transferOk = balance && isNotBlocked && accountExist ? 'TRANSFERÊNCIA REALIZADA' : 'TRANSFERÊNCIA NEGADA';

console.log(transferOk); 