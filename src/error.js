/**
 * Centralized error object
 */
class AppError extends Error {
    constructor(errObj, httpCode) {
        super(errObj.description);
        Error.call(this);
        Error.captureStackTrace(this);
        this.name = errObj.name;
        this.description = errObj.description;
        this.httpCode = httpCode;
    }
}

module.exports = AppError;