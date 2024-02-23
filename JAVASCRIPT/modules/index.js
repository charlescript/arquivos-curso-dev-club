 const report = require('./objectsAndFunctions');
console.log(report.sum(2,2));
console.log(report.multi(2,5));
console.log(report.person);

console.log('----------------------------------------------------------');

const {sum, multi, person} = require('./objectsAndFunctions');
console.log(sum(2,2));
console.log(multi(2,5));
console.log(person);