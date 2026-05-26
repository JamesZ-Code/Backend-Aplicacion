require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const carts = require('./routes/carts');
const orders = require('./routes/Orders');
const users = require('./routes/User');
const products = require('./routes/Products');

app.use(bodyParser.json());
app.use(cors());
app.use('/api/carts', carts);
app.use('/api/orders', orders);
app.use('/api/users', users);
app.use('/api/products', products);

// Middleware de manejo de errores global
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

const user = process.env.MONGODB_USER;
const pass = process.env.MONGODB_PASSWORD;
const PORT = process.env.PORT || 4000;

const mongoURI = `mongodb+srv://${user}:${pass}@marketplace-cluster.b7rlju2.mongodb.net/marketplace_db?appName=marketplace-cluster`;

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas using environment variables'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});