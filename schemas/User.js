const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        require: true
    },
    administrator: {
        type: Boolean
    }
});

module.exports = mongoose.model('User', userScheme);