const {StatusCode} = require('http-status-codes')

const CustomAPIError = require('./custom-error')


class notFound extends CustomAPIError {

    constructor(message) {
        super(message)
        this.StatusCode = StatusCode.NOT_FOUND
    }

}

module.exports = notFound;