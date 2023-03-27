const mongoose = require('mongoose');

const Item = mongoose.model('Item', {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true},
});

module.exports = Item;