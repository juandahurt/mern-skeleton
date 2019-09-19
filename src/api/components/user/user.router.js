const express = require('express');
const userController = require('./user.controller');
const userRouter = express.Router();

userRouter.post('/', userController.create);

module.exports = userRouter;
