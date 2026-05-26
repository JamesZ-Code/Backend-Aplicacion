const Order = require('../models/Orders');

class OrderService {
    async getAllOrders() {
        return await Order.find();
    }

    async createOrder(orderData) {
        const order = new Order(orderData);
        return await order.save();
    }

    async updateOrder(orderId, orderData) {
        return await Order.updateOne({ _id: orderId }, { $set: orderData });
    }

    async deleteOrder(orderId) {
        return await Order.deleteOne({ _id: orderId });
    }
}

module.exports = new OrderService();
