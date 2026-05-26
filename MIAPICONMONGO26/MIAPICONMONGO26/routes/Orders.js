const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/', async (req, res) => {
    Order.find()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ message: err.message }));
});

router.post('/', async (req, res) => {
    const { buyer_id, total, status, shipping_address, items, payment } = req.body;
    const order = new Order({ buyer_id, total, status, shipping_address, items, payment });
    order.save()
        .then(data => res.status(201).json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.patch('/:id', async (req, res) => {
    const { buyer_id, total, status, shipping_address, items, payment } = req.body;
    Order.updateOne({ _id: req.params.id }, { $set: { buyer_id, total, status, shipping_address, items, payment } })
        .then(data => res.json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.delete('/:id', async (req, res) => {
    Order.deleteOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

module.exports = router;