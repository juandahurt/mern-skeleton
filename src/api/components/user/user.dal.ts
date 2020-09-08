import User from './user.model';
const { connectToDB, disconnectDB } = require('../../../mongoose');
import mongoose from 'mongoose';

export class UserDAL {
    /**
     * Adds a new user to the DB.
     * @param user User data
     */
    async create(user: any) {
        await connectToDB();
        let userRecord = await User.create(user);
        await disconnectDB();
        return userRecord;
    }

    /**
     * Deletes an user from the DB.
     * @param userId User id
     */
    async delete(userId: mongoose.Types.ObjectId) {
        await connectToDB();
        let userRemoved = await User.findOneAndDelete({_id: userId});
        await disconnectDB();
        return userRemoved;
    }

    /**
     * Checks if the value is a valid id.
     * @param id User id
     * @returns true if the id is valid, return false otherwise
     */
    isValid(userId: mongoose.Types.ObjectId) {
        return mongoose.Types.ObjectId.isValid(userId);
    }

    /**
     * Verifies the existence of an user by a key and its value.
     * @param key key attr
     * @param value attr value
     */
    async userExists({key, value}: any) {
        await connectToDB();
        let userFound = await User.findOne({[key]: value});
        await disconnectDB();
        return userFound !== null;
    }
}
