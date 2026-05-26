const express = require('express');
const router = express.Router();
const Cart = require('../models/carts');

router.get('/', async (req, res) => {
    Cart.find()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ message: err.message }));
});

router.post('/', async (req, res) => {
    const { user_id, items } = req.body;
    const cart = new Cart({ user_id, items });
    cart.save()
        .then(data => res.status(201).json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.patch('/:id', async (req, res) => {
    const { user_id, items } = req.body;
    Cart.updateOne({ _id: req.params.id }, { $set: { user_id, items, updated_at: Date.now() } })
        .then(data => res.json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.delete('/:id', async (req, res) => {
    Cart.deleteOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

module.exports = router;