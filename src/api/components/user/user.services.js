const AppError = require('../../../error');
const errors = require('./user.errors');
const UserDAL = require('./user.dal');
const userSchema = require('./user.schema');

class UserService {
    /**
     * Creates a new user if the email provided is not being used.
     * @param context Enviroment context (must contain the user)
     */
    async create(context) {
        await userSchema.validateAsync(context.user);
        let userDAL = new UserDAL();

        if (await userDAL.userExists(context.user.email)) {
            throw new AppError(errors.emailAlreadyRegistered, 422);
        }
        return userDAL.create(context.user);
    }
}

module.exports = UserService;