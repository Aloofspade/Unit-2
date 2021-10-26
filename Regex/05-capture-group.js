const  str = `
test.js
coding_01.js
style.css
12345678
html.css
html.html 
.jpeg
index.html
coding.git 
something
another.png
script.js
Jimmy
`

const re = /(\w+)\.(js|css|png|html|jpeg)/g


let match = re.exec(str)
// console.log(match);

let fileTypes = {};
//loop for exec()

while (match) {
    console.log(`filename: ${match[1]} Extension: ${match[2]}`);

    if(!fileTypes[match[2]]){
        fileTypes[match[2]] = 1;
    }
    else {
        fileTypes[match[2]]++;
    }
    math = re.exec(str);
}

console.log(fileTypes);