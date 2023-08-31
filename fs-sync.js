// const fs = require('fs');
// fs.readFileSync fs.writeFileSync

const { readFileSync, writeFileSync } = require('fs');
console.log('start')
const first = readFileSync('first.txt','utf8');
const second = readFileSync('second.txt','utf8');

// console.log(first,second);

writeFileSync('result-sync.txt', 
              `Here is the result : ${first}, ${second}`,
              { flag: 'a' });

console.log('done with the task ')
console.log('start with 2nd file')