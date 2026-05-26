const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

router.get('/', async (req, res, next) => {
    try {
        const data = await productService.getAllProducts();
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { seller_id, name, description, price, stock, category, images } = req.body;
        const data = await productService.createProduct({ seller_id, name, description, price, stock, category, images });
        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const { seller_id, name, description, price, stock, category, images } = req.body;
        const data = await productService.updateProduct(req.params.id, { seller_id, name, description, price, stock, category, images });
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const data = await productService.deleteProduct(req.params.id);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

module.exports = router;