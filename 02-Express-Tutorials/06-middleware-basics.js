const express = require('express');

const app = express();
const morgan = require('morgan');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');



app
.use(morgan("tiny"), auth)
.get('/', (req, res) => {
    res.end("home page");
})
.get('/about',  (req, res) => {
    res.end("about page");
})
.listen(3000, () => console.log("server listening at port 3000"))


