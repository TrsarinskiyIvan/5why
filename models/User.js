const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },

    isActive: {
        type: Boolean,
        default: false
    }
});

UserSchema.pre('save', function (next) {

    const user = this;

    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('User', UserSchema);