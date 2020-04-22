const AppError = require('../../../error');
const logger = require('logger');
const userDAL = require('./user.dal');

const userController = {
    /**
     * Create a new user.
     * @param req - client request
     * @param res - server response
     */
    async create(req, res) {
        // TODO: Add schema validation
        let context = {
            user: req.body
        };
        try {
            logger.info('creating user...');
            let user = await userDAL.create(context);
            res.status(200).send({
                status: 'success',
                message: 'User created successfully',
                data: user
            });
        } catch (err) {
            logger.error(err);
            if (err instanceof AppError) {
                res.status(err.httpCode).send({
                    status: 'error',
                    message: err.message,
                    data: context.user
                });
            } else {
                res.status(500).send(err.message);
            }
        }
    },
    async delete(req, res) {
        res.json({ msg: 'TODO: delete user' });
    }
}

module.exports = userController;