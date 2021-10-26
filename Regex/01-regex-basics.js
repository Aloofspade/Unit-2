const str = 'test, testing, code, script.js, style.css, index.html';

const re = /test/g;

console.log(re.test(str))
console.log(re.exec(str))

console.log(str.match(re));
console.log(str.replace(re, "changed"));


