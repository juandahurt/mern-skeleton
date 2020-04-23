const Joi = require('@hapi/joi');
const AppError = require('../../../error');
const errors = require('./user.errors');

const userSchema = Joi.object({
    name: 
        Joi.string()
        .error(new AppError(errors.invalidName, 400)),
    email: 
        Joi.string()
        .email()
        .error(new AppError(errors.invalidEmail, 400)),
    password: 
        Joi.string()
        .error(new AppError(errors.invalidPassword, 400))
});

module.exports = userSchema;