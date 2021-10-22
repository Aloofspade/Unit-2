const express = require('express');
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config()


const productsRouter = require('./routes/products')



const startServer = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app
        .use([express.urlencoded({extended: false}), express.json()])
        .get('/', (req, res) => {res.send("home")})
        .use("/api/v1/products", productsRouter)
        .listen(3000, () => console.log("listening @ 3000"));
    } catch (err){
        console.log(err);
    }

}

startServer()