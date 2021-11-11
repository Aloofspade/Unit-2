const CustomAPIError = require('./custom-error');

const {StatusCode} = require('http-status-codes')


class BadRequest extends CustomAPIError{
    constructor (message){
        super(message);
        this.StatusCode = StatusCode.BAD_REQUEST;
    }
}

module.exports = BadRequest;
