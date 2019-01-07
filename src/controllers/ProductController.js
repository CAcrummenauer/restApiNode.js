const mongoose = require('mongoose');
const product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query; // Usando desestruturação para obter a página
        const products = await product.paginate({/*condições*/}, {page /* page:page */, limit: 10});
        return res.json(products);
    },
    async show(req, res) {
        const productShow = await product.findById(req.params.id);
        res.json(productShow);
    },
    async store(req, res) {
        const productInsert = await product.create(req.body);
        return res.json(productInsert);
    },
    async update(req, res) {
        const productUpdate = await product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(productUpdate);
    },
    async destroy(req, res) {
        await product.findByIdAndRemove(req.params.id);
        return res.send();
    }
}