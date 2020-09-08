/**
 * Centralized error object
 */
export class AppError extends Error {
    public description: String; 
    public httpCode: Number; 

    constructor(errObj: any, httpCode: Number) {
        super(errObj.description);
        Error.call(this);
        Error.captureStackTrace(this);
        this.name = errObj.name;
        this.description = errObj.description;
        this.httpCode = httpCode;
    }
}