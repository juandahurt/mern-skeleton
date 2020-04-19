const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
};

module.exports = config;