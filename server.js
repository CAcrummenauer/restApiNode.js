const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o BD
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser: true}
);

// Registrar model na aplicação:
requireDir('./src/models');

// Criação da primeira rota
app.get('/', (req, res) => {
    res.send('Hello CezarAC');
});

app.listen(3001);
