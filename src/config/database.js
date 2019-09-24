const db = {
    uri: 'mongodb://' + (process.env.HOST || 'localhost') + ':27017/your_db' 
};

module.exports = db;