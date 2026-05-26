const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    name: { type: String },
    quantity: { type: Number, required: true, min: 1 },
    unit_price: { type: Number }
}, { _id: false });

const cartSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    updated_at: { type: Date, default: Date.now },
    items: [cartItemSchema]
}, { collection: 'carritos' });

module.exports = mongoose.model('Cart', cartSchema);