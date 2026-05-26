const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

router.get('/', async (req, res) => {
    Product.find()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ message: err.message }));
});

router.post('/', async (req, res) => {
    const { seller_id, name, description, price, stock, category, images } = req.body;
    const product = new Product({ seller_id, name, description, price, stock, category, images });
    product.save()
        .then(data => res.status(201).json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.patch('/:id', async (req, res) => {
    const { seller_id, name, description, price, stock, category, images } = req.body;
    Product.updateOne({ _id: req.params.id }, { $set: { seller_id, name, description, price, stock, category, images } })
        .then(data => res.json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.delete('/:id', async (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

module.exports = router;