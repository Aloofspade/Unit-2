// const {CustomAPIError} = require("../errors");
const {StatusCode} = require("http-status-codes");


const errorHandlerMiddleware = (err, req, res, next) => {
    //debug testing

    // return res.json({err})


    /// every errors will come to this file 

//     if(err instanceof CustomAPIError) {
//     res.status(err.statusCode).json({msg: err.message});

//     }
// res.status(500).json({msg: "something went wrong"})

let customError = {
    statusCode:  err.statusCode || StatusCode.INTERNAL_SERVER_ERROR,
    msg: err.msg || "somthing went wrong try again later",
};

if(err.name === "ValidationError"){
    customError.msg = Object.values(err.errors)
    .map((item) => item.message)
    .join(", ");
    customError.statusCode = 400;
}

if(err.code || err.code === 1100){

    customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue
        )} field, ${Object.values(err.keyValue)} is already taken. Please provide a differnt ${Object.keys(err.keyValue)}`
        customError.statusCode(400);
}



if(err.name === "CastError"){
    customError.msg = `No item found with id ${err.value}`;
    customError.statusCode = 404;
}


return  res.status(customError.statusCode).json({msg: customError.msg});
};

module.exports = errorHandlerMiddleware;
