const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
router.get('/', async (req, res) => {
    Book.find()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ message: err.message }));
});

router.post('/', async (req, res) => {
    const { title, description, author } = req.body;
    const book = new Book({ title, description, author });
    book.save()
        .then(data => res.status(201).json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.patch('/:id', async (req, res) => {
    const { title, description, author } = req.body;
    Book.updateOne({ _id: req.params.id }, {$set: { title, description, author }
    })
        .then(data => res.json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

router.delete('/:id', async (req, res) => {
    Book.deleteOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.status(400).json({ message: err.message }));
});

module.exports = router;