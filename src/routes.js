const express = require('express');
const routes = express.Router();

// Criação da primeira rota
routes.get('/', (req, res) => {
    /*product.create({
        title: 'React native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });*/
    return res.send('Hello CezarAC');
});

module.exports = routes;