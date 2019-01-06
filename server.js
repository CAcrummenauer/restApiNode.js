const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o BD
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser: true}
);

// Registrar model na aplicação:
require('./src/models/Product');

// Criação da primeira rota
app.get('/', (req, res) => {
    res.send('Hello CezarAC');
});

app.listen(3001);