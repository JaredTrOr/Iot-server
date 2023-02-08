const mongoose = require('mongoose');

const operationsSchema = mongoose.Schema({
   candy: {
        typeOfCandy: {
            type: String,
            required: true
        },
        big:{
            type: Number,
            required: false,
            default: 0
        },
        medium:{
            type: Number,
            required: false,
            default: 0
        },
        small:{
            type: Number,
            required: false,
            default: 0
        }
    },
    usernameId:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Operations', operationsSchema);