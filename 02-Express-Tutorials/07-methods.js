const express = require('express');

const app = express();

let {people} = require('./data');


app
.use(express.static("./public"))

.use(express.urlencoded ({extended:false}))
.use(express.json())
.post("/login", (req, res) => {
    console.log(req.body);
    const {user} = req.body;
    res.send(`welcome ${user}`)
})

.get("/api/people", (req, res) => {
    res.status(200).json({success: true, data: people});
})
.post("/api/people", (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg: "please enter a name"})
    }
    people.push({id: new Date().getTime(), name})
    res.json({success: true, person: name})
})
.listen(3000, () => console.log("server is listening on port 3000"))



