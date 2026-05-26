const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    seller_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 0 },
    category: {
        name: { type: String },
        slug: { type: String }
    },
    images: [{ type: String }],
    date_created: { type: Date, default: Date.now }
}, { collection: 'productos' });

module.exports = mongoose.model('Product', productSchema);