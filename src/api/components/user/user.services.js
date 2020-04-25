const AppError = require('../../../error');
const { connectToDB } = require('../../../mongoose');
const errors = require('./user.errors');
const User = require('./user.model');
const userSchema = require('./user.schema');

class UserService {
    /**
     * Create a new user
     * @param context Enviroment context (must contain the user)
     */
    async create(context) {
        await userSchema.validateAsync(context.user);
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

module.exports = UserService;