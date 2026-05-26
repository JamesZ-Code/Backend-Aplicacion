const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    label: { type: String, default: 'Home' },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip_code: { type: String }
}, { _id: false });

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password_hash: { type: String, required: true },
    registration_date: { type: Date, default: Date.now },
    is_seller: { type: Boolean, default: false },
    seller_data: {
        store_name: { type: String },
        bank_clabe: { type: String },
        average_rating: { type: Number, default: 0 }
    },
    addresses: [addressSchema]
}, { collection: 'usuarios' });

module.exports = mongoose.model('User', userSchema);