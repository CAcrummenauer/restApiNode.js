const mongoose = require('mongoose');
const product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await product.find();
        return res.json(products);
    },
    async show(req, res) {
        const productShow = await product.findById(req.params.id);
        res.json(productShow);
    },
    async store(req, res) {
        const productInsert = await product.create(req.body);
        return res.json(productInsert);
    }
}