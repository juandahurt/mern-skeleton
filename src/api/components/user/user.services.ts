import { AppError } from '../../../error';
import { errors } from './user.errors';
import { UserDAL } from './user.dal';
import { userSchema } from './user.schema';

export class UserService {
    /**
     * Creates a new user if the email provided is not being used.
     * @param context Enviroment context (must contain the user)
     */
    async create(context: any) {
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
    async delete(context: any) {
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