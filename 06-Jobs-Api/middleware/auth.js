const jwt = require('jsonwebtoken');

const {UnauthError} = require('../errors');

require('dotenv').config()

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization


    if(!authHeader || !authHeader.startsWith('Bearer')){
    throw new UnauthError("Not authrized to be here")
    }
    const token = authHeader.split(" ")[1]

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userID: decoded.userID, name: decoded.name};
        next()
    } catch (err) {
        throw new UnauthError("Not authorized to access this route")
    }
}


module.exports = authenticationMiddleware;