const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    User.find()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ message: err.message }));
});

router.post('/', async (req, res) => {
    const { name, email, password_hash, is_seller, seller_data, addresses } = req.body;
    const user = new User({ name, email, password_hash, is_seller, seller_data, addresses });
    user.save()
        .then(data => res.status(201).json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.patch('/:id', async (req, res) => {
    const { name, email, password_hash, is_seller, seller_data, addresses } = req.body;
    User.updateOne({ _id: req.params.id }, { $set: { name, email, password_hash, is_seller, seller_data, addresses } })
        .then(data => res.json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.delete('/:id', async (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

module.exports = router;