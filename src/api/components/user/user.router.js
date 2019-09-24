const express = require('express');
const userController = require('./user.controller');

const userRouter = express.Router();

// create user
userRouter.post('/', userController.create);
// delete user
userRouter.delete('/', userController.delete);

module.exports = userRouter;
