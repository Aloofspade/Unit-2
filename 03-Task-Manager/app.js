const express = require('express');

const app = express();

const taskRouter = require('./routers/tasksRouter')

app
//front end
.use(express.static('./public'))

//middleware

.use([express.urlencoded({extended: false}), express.json()])

//routers
.use("/api/v1/tasks", taskRouter)

//listener

.listen(3000, () => console.log("listening @ 3000"));