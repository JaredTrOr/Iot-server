const mongoose = require('mongoose');

const operationsSchema = mongoose.Schema({
    typeOfCandy: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    usernameId:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('CandyOrders', operationsSchema);