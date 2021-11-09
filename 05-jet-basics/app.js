const express = require('express');
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const app = express();
require("dotenv").config();
require("express-async-errors")
const loginRouter = require('./routes/login')

const port = process.env.POST || 3000
app
.use([express.urlencoded({extended: false}), express.json()])
.use(express.static("./public"))
.use("/api/v1", loginRouter)


.use(notFound)
.use(errorHandlerMiddleware)

.listen(port, () => console.log(`listening @ ${port}`))


