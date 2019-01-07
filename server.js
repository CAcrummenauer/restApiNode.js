const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o BD
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    {useNewUrlParser: true}
);

// Registrar modelos aunomaticamente (require-dir) na aplicação:
requireDir('./src/models');

// const product = mongoose.model('Product');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);

