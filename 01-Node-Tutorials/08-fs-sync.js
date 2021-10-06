//synchonous - excutes commands in order 

const {readFileSync, writeFileSync} = require('fs');

console.log('start');
const first = readFileSync("./content/first.txt", "utf8");

const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
    "./content/sync-result.txt",
    `Here is the result: \n${first} \n${second}`,
    //options go here . flag is the only required option 
    //flag: a // append - adds to the end of the document 
    //flag: 'w' //write - overwrites the document 
    {flag: "a"}
);


console.log('finished task');
console.log('next task');