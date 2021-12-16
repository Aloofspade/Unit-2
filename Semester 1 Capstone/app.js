require("dotenv").config()
require("express-async-errors")

const express = require("express")

const app = express()


const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2;

const connectDB = require("./db/connect")
cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret 
});



const shoeRouter = require("./routes/shoeRoutes")

const notFoundError = require("./errors/notfound")

const errorHandlerMiddleware = require("./middleware/error-handler")


const port = process.env.PORT || 3000

app
.use(express.static("./public"))
.use(express.json())

.use(fileUpload({ useTempFiles: true}))

.get('/', (req, res) => {
   res.send("<h1>File Upload Starter</h1>");
})

.use('/api/v1/shoes', shoeRouter)
.use(notFoundError)
.use(errorHandlerMiddleware)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
            app.listen(port, console.log(`listening @ ${port}`))
        
    } catch (error){
        console.log(error);
    }
}


start()