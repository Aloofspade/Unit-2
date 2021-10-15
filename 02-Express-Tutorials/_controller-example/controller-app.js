const express = require('express');

const app = express();

//Routes
const people = require('./routers/people');
const auth = require('./routers/auth');
//App/Server

app
//front-end Directory Exports 
.use((express.static('../public')))
//middleware
.use((express.urlencoded({extended: false}), express.json()))


//listen

.use("/api/people", people)
.use("/login", auth)

.listen(3000, () => console.log('listening @ 3000...'))