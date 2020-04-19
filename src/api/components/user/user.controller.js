const ERRORS = require('./user.errors');
const User = require('./user.model');
const logger = require('logger');

const userController = {
    /**
     * Create a new user only if the provided email is not being used and 
     * all the fields are provided.
     * @param req - client request
     * @param res - server response
     */
    async create(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        if (!name) {
            res.status(422).send(ERRORS.INVALID_NAME);
            return;
        }
        // return error if no email privided
        if (!email) {
            res.status(422).send(ERRORS.INVALID_EMAIL);
            return;
        }
        // return error if no password provided
        if (!password) {
            res.status(422).send(ERRORS.INVALID_PASSWORD);
            return;
        }

        try {
            let formated_email = email.toLowerCase();
            let user = await User.findOne({email: formated_email}).exec();

            if (user) {
                // email provided is already registered
                res.status(422).send(ERRORS.ALREADY_REGISTERED);
                return;
            } 

            // create the new user
            let new_user = new User({
                name: name,
                email: email,
                password: password
            });
            let user_saved = await new_user.save();

            res.status(200).send(user_saved);
        } catch (err) {
            logger.error(err.message);
            res.status(500).send(ERRORS.NOT_REGISTERED);
        }
    },
    async delete(req, res) {
        res.json({ msg: 'TODO: delete user' });
    }
}

module.exports = userController;