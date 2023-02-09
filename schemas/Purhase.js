const mongoose = require('mongoose');

const purchaseSchema = mongoose.Schema({
    idCandy:{
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Purchase', purchaseSchema);
