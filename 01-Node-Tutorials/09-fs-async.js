//asynchronous - serverl commands can be executed out of order

const {readFile, writeFile} = require('fs');

console.log('start');
//these are async so they will return promises 
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile(
            './content/async-result.txt',
            `Here is the result 
            ${first} 
            ${second}\n`,
            {flag: "a"},
            (err, result) => {
                if(err){
                    console.log(err);
                    return
                }
                console.log('finished task');
            }
        )
    });
});

console.log('next task');