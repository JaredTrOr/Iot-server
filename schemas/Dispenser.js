const mongoose = require('mongoose');

const dispenserSchema = mongoose.Schema({
    position: {
        type: String, 
        required: true
    },
    candy_name: {
        type: String, 
        required: true,
    },
    amount: {
        type: Number, 
        required: true,
    }
});

module.exports = mongoose.model('Dispenser', dispenserSchema);