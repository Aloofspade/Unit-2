const jwt = require("jsonwebtoken")

const {UnauthError} = require("../errors");
require("dotenv").config()

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization


    if(!authHeader || !authHeader.startsWith("Bearer")) {
        throw new UnauthError(" No token provided");
    }


    const token = authHeader.split(" ")[1]

    try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      const {id, username} = decoded;
      req.user = {id, username};
      next()
    } catch (err) {
        throw new UnauthError("Not authrized to access this route")

    }

}

module.exports = authenticationMiddleware;