const User = require('./models//User');
const bcrypt = require('bcrypt')
const {StatusCodes} = require('http-status-codes')

const register = async (req, res) => {
//hashing- passing a string to get back a completly different string
//salting - create a random number of bits and add it to the string before hashing// 10 bits is more harder
//peperating - is adding an extra letter [A-Z] to the end of the password// 50 times harder 


// const {password} = req.body
// const salt = await bcrypt.genSalt(10)

// const hashpass = await bcrypt.hash(password, salt)




    const newUser = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ newUser });
};
const login = (req, res) => {
    res.send("login");

}

module.exports = {register, login}