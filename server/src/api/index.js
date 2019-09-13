const express = require('express');
const restRouter = express.Router();
const userRouter = require('./components/user');

restRouter.use('/user', userRouter);

module.exports = restRouter;