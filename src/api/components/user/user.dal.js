const User = require('./user.model');
const { connectToDB, disconnectDB } = require('../../../mongoose');
const mongoose = require('mongoose');

class UserDAL {
    /**
     * Adds a new user to the DB.
     * @param user User data
     */
    async create(user) {
        await connectToDB();
        let userRecord = await User.create(user);
        await disconnectDB();
        return userRecord;
    }

    /**
     * Deletes an user from the DB.
     * @param userId User id
     */
    async delete(userId) {
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
    isValid(userId) {
        return mongoose.Types.ObjectId.isValid(userId);
    }

    /**
     * Verifies the existence of an user by a key and its value.
     * @param key key attr
     * @param value attr value
     */
    async userExists({key, value}) {
        await connectToDB();
        let userFound = await User.findOne({[key]: value});
        await disconnectDB();
        return userFound !== null;
    }
}

module.exports = UserDAL;