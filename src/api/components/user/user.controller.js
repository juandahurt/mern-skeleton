const AppError = require('../../../error');
const logger = require('logger');
const userService = require('./user.services');

class UserController {
    /**
     * Create a new user.
     * @param req - client request
     * @param res - server response
     */
    static async create(req, res) {
        let context = {
            user: req.body
        };
        try {
            let user = await new userService().create(context);
            logger.info(`user ${user._id} has been created`);
            res.status(200).send({
                status: 'success',
                message: 'User created successfully',
                data: user
            });
        } catch (err) {
            logger.error('create user failed: ' + err.name);
            if (err instanceof AppError) {
                res.status(err.httpCode).send({
                    status: 'error',
                    error: {
                        name: err.name,
                        description: err.description
                    },
                    data: context.user
                });
            } else {
                res.status(500).send(err.message);
            }
        }
    }

    static async delete(req, res) {
        res.json({ msg: 'TODO: delete user' });
    }
}

module.exports = UserController;