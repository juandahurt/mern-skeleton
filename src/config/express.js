const express = require('express');
const restRouter = require('../api');
const app = express();

// REST router
app.use('/api', restRouter);

module.exports = app;