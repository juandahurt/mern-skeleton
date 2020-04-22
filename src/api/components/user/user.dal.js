/**
 * User Data Access Layer
 */

const User = require('./user.model');
const AppError = require('../../../error');
const errors = require('./user.errors');

const UserDAL = {
    /**
     * Create a new user
     * @param context Enviroment context (must contain the user)
     */
    async create(context) {
        let userFound = await User.findOne({email: context.user.email});
        if (userFound !== null) {
            throw new AppError(errors.emailAlreadyRegistered, 422);
        }
        let userRecord = await User.create({
            name: context.user.name,
            password: context.user.password,
            email: context.user.email
        });
        return userRecord;
    }
}

module.exports = UserDAL;