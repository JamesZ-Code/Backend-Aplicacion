const express = require('express');
const router = express.Router();
const orderService = require('../services/orderService');

router.get('/', async (req, res, next) => {
    try {
        const data = await orderService.getAllOrders();
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { buyer_id, total, status, shipping_address, items, payment } = req.body;
        const data = await orderService.createOrder({ buyer_id, total, status, shipping_address, items, payment });
        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const { buyer_id, total, status, shipping_address, items, payment } = req.body;
        const data = await orderService.updateOrder(req.params.id, { buyer_id, total, status, shipping_address, items, payment });
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const data = await orderService.deleteOrder(req.params.id);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

module.exports = router;