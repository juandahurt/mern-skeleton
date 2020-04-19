const config = require('./config');

const db = {
    uri: 'mongodb://' + (config.host || 'localhost') + ':27017/your_db' 
};

module.exports = db;