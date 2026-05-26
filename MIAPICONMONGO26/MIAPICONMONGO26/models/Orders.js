const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    seller_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String },
    quantity: { type: Number },
    price_paid: { type: Number },
    shipping_status: { type: String, default: 'pending' },
    tracking_code: { type: String, default: null }
}, { _id: false });

const orderSchema = mongoose.Schema({
    buyer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    order_date: { type: Date, default: Date.now },
    total: { type: Number, required: true },
    status: { type: String, default: 'processing' },
    shipping_address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip_code: { type: String }
    },
    items: [orderItemSchema],
    payment: {
        method: { type: String },
        transaction_id: { type: String },
        status: { type: String },
        payment_date: { type: Date }
    }
}, { collection: 'pedidos' });

module.exports = mongoose.model('Order', orderSchema);