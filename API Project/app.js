require("dotenv").config();
require("express-async-errors")


const express = require('express');
const app = express();
const connectDB = require('./db/connect')

const auth = require('./middleware/auth')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


const burgerRoute = require('./Routes/burger')
const authRoute = require('./Routes/auth')


const helmet = require('helmet')

const xss = require("xss-clean")

const rateLimter = require('express-rate-limit')

const cors = require('cors')


const port = process.env.POST || 3000

const minutes = 100 * 60;

const limit = 15 * minutes



app
.set('trust proxy', 1)
.use(
    rateLimter({
        windowMs: limit,
        max : 100,
    })   
)

.use([express.urlencoded({extended: false}), express.json()])

.use(helmet())

.use(cors())

.use(xss())
//middleware

//
.use("/api/v1/burger", auth, burgerRoute)
.use("/api/v1/auth", authRoute)

.use(notFound)
.use(errorHandlerMiddleware)

const BeginServer = async () => {

    try{
        await connectDB(process.env.MONGO_URL)

        app.listen(port, () => console.log(`listening to ${port}`))
    } catch(err){
        console.log(err);
    }
}

BeginServer()