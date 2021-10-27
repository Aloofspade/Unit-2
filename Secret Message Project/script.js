const fs = require("fs");


const input = fs.readFileSync("./jenkins.txt", 'utf8');

//1.
const re = /[{@}][a-zA-Z]{0,18}\S/g


console.log(input.match(re));


