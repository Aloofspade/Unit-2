const {StatusCode} = require('http-status-codes')

const CustomAPIError  = require('./custom-error')

class UnauthError  extends CustomAPIError {
    constructor (message){
        super(message)
        this.StatusCode = StatusCode.UNAUTHORIZED
    }
}

module.exports = UnauthError;