const input = require('./input.json');
const search = require('./search.js');

if(search(input))return console.log('YES');
return console.log('NO');