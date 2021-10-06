// const {readFile, writeFile} = require('fs')


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then((data) => {
//     const first = data;
// })
// .then(getText("./content/second.txt")
//  .then((data) => {
//      const second = data;
//  })

// )
// .then((data) => console.log(data))
// .catch((err) => console.log(err))


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 const {readFile, writeFile} = require('fs').promises;


//  const util = require('util')

//  const readFileProm = util.promisify(readFile)

//  const writeFileProm = util.promisify(writeFile)

 const start = async () => {
     try{
         const first = await readFile('./content/first.txt', 'utf8')
         const second = await readFile('./content/second.txt', 'utf8')
         await writeFile(
             './content/promise-result-1.txt',
             `this was promisfied: \n${first} \n${second} \n\n`,
             {flag: "a"}
         ) 
         console.log(first, second);
     } catch (err) {
         console.error(err);
     }
 }

 start();