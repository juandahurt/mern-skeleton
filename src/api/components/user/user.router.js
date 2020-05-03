const express = require('express');
const UserController = require('./user.controller');

const userRouter = express.Router();

// create user
userRouter.post('/', UserController.create);
// delete user
userRouter.delete('/:id', UserController.delete);

module.exports = userRouter;
