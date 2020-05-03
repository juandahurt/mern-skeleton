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

        if (await userDAL.userExists({key: 'email', value: context.user.email})) {
            throw new AppError(errors.emailAlreadyRegistered, 422);
        }
        return userDAL.create(context.user);
    }

    /**
     * Deletes an user only if the id is valid and it exists. 
     * @param context Enviroment context (must contain the user id)
     */
    async delete(context) {
        let userDAL = new UserDAL();

        if (!userDAL.isValid(context.userId)) {
            throw new AppError(errors.notFound, 404);
        }
        if (!(await userDAL.userExists({key: '_id', value: context.userId}))) {
            throw new AppError(errors.notFound, 404);
        }

        return await userDAL.delete(context.userId);
    }
}

module.exports = UserService;