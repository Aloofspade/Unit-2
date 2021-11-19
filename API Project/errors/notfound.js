const {StatusCodes} = require('http-status-codes')

const CustomAPIError = require('./custom-error')


class notFound extends CustomAPIError {

    constructor(message) {
        super(message)
        this.StatusCode = StatusCodes.NOT_FOUND
    }

}

module.exports = notFound;