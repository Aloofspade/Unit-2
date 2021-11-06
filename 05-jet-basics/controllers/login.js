//login returns a json with msg success

const {BadRequest} = require("../errors")
const jwt = require('jsonwebtoken')
require("dotenv").config();

const login = (req, res) => {
    const {username, password} = req.body
    if(!username || !password) {
        throw new BadRequest("Must enter a username and password")
    }

    //the secret password should be very hard to guess and 256 bits long 
    //this is bad only for example//this i will come from mongo DB 
    const id = new Date().getDate()

    //try to keep the payload small for user expretions 
    ///never include the password in the payloadF

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: "30d"})
    console.log(token);
 res.json({msg: 'success - user created', token})
}


const dashboard = (req, res) => {
    const luckNum = Math.floor(Math.random() * 255)
    res.json({msg: req.user.username, secret: req.headers.authorization})

}


module.exports = {login, dashboard}

