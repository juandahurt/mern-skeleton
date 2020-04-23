const express = require('express');
const UserController = require('./user.controller');

const userRouter = express.Router();

// create user
userRouter.post('/', UserController.create);
// delete user
userRouter.delete('/', UserController.delete);

module.exports = userRouter;
