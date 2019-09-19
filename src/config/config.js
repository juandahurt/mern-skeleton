const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGO_URI ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') + '/your_db'
};

module.exports = config;