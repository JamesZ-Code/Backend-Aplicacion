require('dotenv').config(); // Línea 1 obligatoria para leer el archivo .env

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const books = require('./routes/books');

app.use(bodyParser.json());
app.use(cors());
app.use('/api/books', books);

// Extraemos solo usuario, contraseña y puerto de las variables de entorno
const user = process.env.MONGODB_USER;
const pass = process.env.MONGODB_PASSWORD;
const PORT = process.env.PORT || 4000;

// Construimos la URI inyectando tus dos variables de seguridad
const mongoURI = `mongodb+srv://${user}:${pass}@marketplace-cluster.b7rlju2.mongodb.net/marketplace_db?appName=marketplace-cluster`;

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas using environment variables'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});