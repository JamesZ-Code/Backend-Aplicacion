const express = require('express');
const router = express.Router();
const cartService = require('../services/cartService');

router.get('/', async (req, res, next) => {
    try {
        const data = await cartService.getAllCarts();
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { user_id, items } = req.body;
        const data = await cartService.createCart({ user_id, items });
        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const { user_id, items } = req.body;
        const data = await cartService.updateCart(req.params.id, { user_id, items });
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const data = await cartService.deleteCart(req.params.id);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

module.exports = router;