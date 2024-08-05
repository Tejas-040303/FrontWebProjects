class ExpressError extends Error{
    constructor(statusCode,message){
        super();
        this.statusCode = statusCode;
        this.message = message;
        // Error.captureStackTrace(this, this.constructor);
    }
}

export default ExpressError;