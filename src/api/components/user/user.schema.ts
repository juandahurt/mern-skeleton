// @ts-ignore
import Joi from '@hapi/joi';

import { AppError } from '../../../error';
import { errors } from './user.errors';

export const userSchema = Joi.object().keys({
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