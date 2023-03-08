const mongoose = require('mongoose');

const User = mongoose.model('Item', {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true},
});

module.exports = Item;