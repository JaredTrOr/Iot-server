const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
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
    address: {
        street:{
            type: String,
            required: false
        },
        number:{
            type: Number,
            required: false
        },
        place: {
            type: String,
            required: false
        }
    }
});

module.exports = mongoose.model('Administrator', adminSchema);