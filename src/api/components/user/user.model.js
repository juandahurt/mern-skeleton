const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});


userSchema.virtual('password')
.set(function(password) {
    let encrypted_password = this.encryptPassword(password);
    this.hashed_password = encrypted_password;
});


userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compareSync(password, this.hashed_password);
    },
    encryptPassword: function (password) {
        let salt = bcrypt.genSaltSync();
        let hash = bcrypt.hashSync(password, salt);
        return hash;
    }
}

module.exports = mongoose.model('User', userSchema);