const express = require("express")

const app = express();
const connectDB = require("./db/connect")

require("dotenv").config();
require("express-async-errors")

const jobsRouter = require("./routes/jobs")
const authRouter = require("./routes/auth");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler")


const port = process.env.POST || 3000

app
.use([express.urlencoded({extended: false}), express.json()])
.get('/', (req, res) => {res.send("home")})
.use("/api/v1/jobs", jobsRouter)
.use("/api/v1/auth", authRouter)
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