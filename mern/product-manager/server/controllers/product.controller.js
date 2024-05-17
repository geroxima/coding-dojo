const Product = require('../models/product.model');

const productController = {
    createProduct(req, res) {
        Product.create(req.body)
            .then(product => res.json(product))
            .catch(err => res.status(400).json(err));
    },
    getAllProducts(req, res) {
        Product.find()
            .then(products => res.json(products))
            .catch(err => res.json(err));
    },
    getProduct(req, res) {
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.json(err));
    },
    updateProduct(req, res) {
        Product.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true
        })
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.status(400).json(err));
    },
    deleteProduct(req, res) {
        Product.findByIdAndDelete(req.params.id)
            .then(deletedProduct => res.json(deletedProduct))
            .catch(err => res.json(err));
    }
};

module.exports = productController;