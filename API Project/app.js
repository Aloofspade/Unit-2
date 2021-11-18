require("dotenv").config();
require("express-async-errors")


const express = require('express');

const app = express();


const connectDB = require('./db/connect')

const foodRoute = require('./Routes/food')
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
.use("", foodRoute)
.use("", authRoute)

const BeginServer = async () => {

    try{
        await connectDB(process.env.MONGO_URL)

        app.listen(port, () => console.log(`listening to ${port}`))
    } catch(err){
        console.log(err);
    }
}

BeginServer()