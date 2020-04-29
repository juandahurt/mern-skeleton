const User = require('./user.model');
const { connectToDB, disconnectDB } = require('../../../mongoose');

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
     * Verifies the existence of an user by the email.
     * @param  email User email
     */
    async userExists(email) {
        await connectToDB();
        let userFound = await User.findOne({email: email});
        await disconnectDB();
        return userFound !== null;
    }
}

module.exports = UserDAL;