const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productImgs: {
        type: Array,
        required: true
    },
    productShortDesc: {
        type: String,
        required: true
    },
    productIngredients: {
        type: Array,
        required: true
    },
    productBenefits: {
        type: String,
        required: true
    },
    productInstructions: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    }
})

module.exports = Product = mongoose.model('product', ProductSchema);