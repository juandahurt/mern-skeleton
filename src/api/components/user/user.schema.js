const Joi = require('@hapi/joi');
const AppError = require('../../../error');
const errors = require('./user.errors');

const userSchema = Joi.object().keys({
    name: 
        Joi.string()
        .required()
        .error(new AppError(errors.invalidName, 400)),
    email: 
        Joi.string()
        .required()
        .email()
        .error(new AppError(errors.invalidEmail, 400)),
    password: 
        Joi.string()
        .required()
        .error(new AppError(errors.invalidPassword, 400))
});

module.exports = userSchema;