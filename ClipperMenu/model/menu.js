const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuSchema =  new Schema({

    zipcode: {
        type: Number,
        required: true
    },
    servicetype:{
        type: String,
        required: true
    },
    cost:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Menu', menuSchema);
