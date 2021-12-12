const {CustomAPIError} = require("../errors");

const errorHandlerMiddleware = (err, req, res, next) => {

    if(err instanceof CustomAPIError) {
    res.status(err.statusCode).json({msg: err.message});

    }
res.status(500).json({msg: "something went wrong"})

}

module.exports = errorHandlerMiddleware;
