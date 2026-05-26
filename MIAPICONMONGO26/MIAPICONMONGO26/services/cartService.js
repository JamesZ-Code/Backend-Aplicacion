const Cart = require('../models/carts');

class CartService {
    async getAllCarts() {
        return await Cart.find();
    }

    async createCart(cartData) {
        const cart = new Cart(cartData);
        return await cart.save();
    }

    async updateCart(cartId, cartData) {
        return await Cart.updateOne(
            { _id: cartId },
            { $set: { ...cartData, updated_at: Date.now() } }
        );
    }

    async deleteCart(cartId) {
        return await Cart.deleteOne({ _id: cartId });
    }
}

module.exports = new CartService();
