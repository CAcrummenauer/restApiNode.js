const express = require('express');
const routes = express.Router();

const productController = require('./controllers/ProductController');

// Definição de rotas
routes.get('/products', productController.index);
routes.get('/products/:id', productController.show);
routes.post('/products', productController.store);

module.exports = routes;