const asyncWrapper = (fn) => {


    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);

        }
    }
}

module.exports = asyncWrapper;

//async just moves the function to the browser API for it can handle it later 

//asyncWrapper turns any callback function into an async function