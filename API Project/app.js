//Enviroment  setup 
require("dotenv").config();
require("express-async-errors")



///App Core
const express = require("express")
const app = express();
const connectDB = require("./db/connect")

//Middleware
const auth = require("./middleware/auth")
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler")

//routes
const burgersRouter = require("./routes/burgers")
const authRouter = require("./routes/auth");


//SwaggeUI
const YAML = require('yaml-js')
const swaggerUI = require('swagger-ui-express')

const swaggerDoc = YAML.load("./swagger.yaml")


//SECURITY Libraries 
const helmet = require('helmet')

const xss = require("xss-clean")

const rateLimter = require('express-rate-limit')

const cors = require('cors')


//VARIABLES
const port = process.env.PORT || 3000

const minutes = 1000 * 60;

const limit = 15 * minutes







app
.set('trust proxy', 1)
.use(
    rateLimter({
    windowMs: limit,
    max: 100,
    })
)
.use([express.urlencoded({extended: false}), express.json()])

//safety blacket 
.use(helmet())

//cors pervents CORS Errors 

.use(cors())

//user sanitization - clears an user limits 

.use(xss())

.get('/', (req, res) => {
    res.send(`<h1>Burgers APi</h1><a href="https://app.swaggerhub.com/apis-docs/Aloofspade/your-api/1.0.0-oas3">Documentation</a>`)
})

.use("https://app.swaggerhub.com/apis-docs/Aloofspade/your-api/1.0.0-oas3", swaggerUI.serve, swaggerUI.setup(swaggerDoc))


.use("/api/v1/auth",  authRouter)
.use("/api/v1/burgers", auth, burgersRouter)
//middleware
.use(notFound)
.use(errorHandlerMiddleware)

const BeginServer = async () => {

try{
await connectDB(process.env.MONGO_URL)

app.listen(port, () => console.log(`listening to ${port}`))
} catch (err){
console.log(err);
}
}

BeginServer();