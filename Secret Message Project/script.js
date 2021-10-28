const fs = require("fs");


const input = fs.readFileSync("./jenkins.txt", 'utf8');

//1.
const re = /[{@}][a-zA-Z]\s{0,18}\S\w+/g


console.log(input.match(re));

//2. 
const re2 = /[{@}][a-zA-Z]\s{0,18}\S\w+/g


console.log(input.match(re2));


