const User = require('./models//User');
const bcrypt = require('bcrypt')
const {StatusCodes} = require('http-status-codes');
const { BadRequest } = require('../errors');




const register = async (req, res) => {
//hashing- passing a string to get back a completly different string
//salting - create a random number of bits and add it to the string before hashing// 10 bits is more harder
//peperating - is adding an extra letter [A-Z] to the end of the password// 50 times harder 


// const {password} = req.body
// const salt = await bcrypt.genSalt(10)

// const hashpass = await bcrypt.hash(password, salt)




    const newUser = await User.create(req.body);

    const token = newUser.createJWT()
    res.status(StatusCodes.CREATED)
    .json({user: {name: newUser.name, userID: newUser.id}, token});
};
const login = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password) {
        throw new BadRequest('must provide an email and password');
    }
    const user = await User.findOne({email})
    if(!user) {
        throw new UnautenticateError('Invalid Credentials');
    }

    const isPassCorrect = await user.comparePassword(password)
    if(!isPassCorrect) {
        throw new UnautenticateError('Invalid Credentials');
    }

    const token = user.createJWT();

    res.status(StatusCodes.OK).json({user: {name: user.name, userID: user.id}, token});

}

module.exports = {register, login}