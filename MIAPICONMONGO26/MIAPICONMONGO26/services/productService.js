const Product = require('../models/Products');

class ProductService {
    async getAllProducts() {
        return await Product.find();
    }

    async createProduct(productData) {
        const product = new Product(productData);
        return await product.save();
    }

    async updateProduct(productId, productData) {
        return await Product.updateOne({ _id: productId }, { $set: productData });
    }

    async deleteProduct(productId) {
        return await Product.deleteOne({ _id: productId });
    }
}

module.exports = new ProductService();
