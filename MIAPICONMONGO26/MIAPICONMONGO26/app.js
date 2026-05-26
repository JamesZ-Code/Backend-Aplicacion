
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const books = require('./routes/books');

app.use(bodyParser.json());
app.use(cors());
app.use('/api/books', books);

mongoose.connect('mongodb+srv://zfelipe583:Felipe2004@damm2026.fay1ilx.mongodb.net/?retryWrites=true&w=majority&appname=damm2026')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});