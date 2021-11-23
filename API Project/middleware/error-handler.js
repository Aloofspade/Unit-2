const {StatusCode } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCode.INTERNAL_SERVER_ERROR,
        msg: err.msg || "something went wrong try again later", 
    };


    if(err.name === "ValidationError"){
        customError.msg = Object.values(err.errors)
        .map((item) => item.message)
        .join(", ");
        customError.statusCode = 400;
    }

    if(err.code || err.code === 1100){
        customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue), Object.keys(err.keyValue
            )} field, ${Object.values(err.keyValue)} is already taken. Please provided a differnt ${Object.keys(err.keyValue)}`
            customError.statusCode(400);
    }

    if(err.name === "CastError"){
        customError.msg = `No item found id ${err.value}`;
        customError.statusCode = 404;
    }
    return res.status(customError.statusCode).json({msg: customError.msg});

}
module.exports = errorHandlerMiddleware;