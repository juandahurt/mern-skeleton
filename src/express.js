/**
 * Express config.
 */

const { config } = require('./config');
const express = require('express');
const morgan = require('morgan');
const restRouter = require('./api');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

if (config.env === 'dev') { 
    app.use(morgan('dev'));
}

app.use('/api', restRouter);

module.exports = app;