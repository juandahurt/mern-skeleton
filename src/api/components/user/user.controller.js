const ERRORS = require('./user.errors');
const User = require('./user.model');

const userController = {
    /**
     * Create a new user only if the provided email is not being used and 
     * all the fields are provided.
     * @param {object} req - client request
     * @param {oobject} res - server response
     */
    async create(req, res) {
        // check for missing fields
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        // return error if no name provided
        if (!name) {
            res.status(422).send({error: ERRORS.INVALID_NAME});
            return;
        }
        // return error if no email no privided
        if (!email) {
            res.status(422).send({error: ERRORS.INVALID_EMAIL});
            return;
        }
        // return error if no password no privided
        if (!password) {
            res.status(422).send({error: ERRORS.INVALID_PASSWORD});
            return;
        }

        try {
            let formatedEmail = email.toLowerCase();
            let user = await User.findOne({email: formatedEmail}).exec();

            if (user) {
                // email provided is already registered
                res.status(422).send({error: ERRORS.ALREADY_REGISTERED});
                return;
            } 

            // create the new user
            let newUser = new User({
                name: name,
                email: email,
                password: password
            });
            let userSaved = await newUser.save();

            res.status(200).send(userSaved);
        } catch (err) {
            res.status(500).send({error: err.message});
        }
    },
    async delete(req, res) {
        res.json({ msg: 'TODO: delete user' });
    }
}

module.exports = userController;