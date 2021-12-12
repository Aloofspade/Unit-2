require("dotenv").config()
require("express-async-errors")

const express = require("express")
const resetPass = require("./controllers/resetPass")
const sendEmail = require("./controllers/sendEmail")
const app = express()

const notFoundError = require("./errors/notfound")
const errorHandlerMiddleware = require("./middleware/error-handler")

const port = process.env.PORT || 3000

app
.use(express.static("./public"))
.use(express.json())


.get('/send', sendEmail)
.get('/reset/:id', resetPass)
// .use(fileUpload({ useTempFiles: true}))

// .get('/', (req, res) => {
//    res.send("<h1>File Upload Starter</h1>");
// })

// .use('/api/v1/products', productRouter)
.use(notFoundError)
.use(errorHandlerMiddleware)


const start = async () => {
    try {
            app.listen(port, console.log(`listening @ ${port}`))
        
    } catch (error){
        console.log(error);
    }
}


start()