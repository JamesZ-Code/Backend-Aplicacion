const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

router.get('/', async (req, res, next) => {
    try {
        const data = await userService.getAllUsers();
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { name, email, password_hash, is_seller, seller_data, addresses } = req.body;
        const data = await userService.createUser({ name, email, password_hash, is_seller, seller_data, addresses });
        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const { name, email, password_hash, is_seller, seller_data, addresses } = req.body;
        const data = await userService.updateUser(req.params.id, { name, email, password_hash, is_seller, seller_data, addresses });
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const data = await userService.deleteUser(req.params.id);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

module.exports = router;