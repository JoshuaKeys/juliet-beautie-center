const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

router.get('/', async (req, res)=> {
    const products = await Product.find({}).skip(2).limit(4);
    res.json({products});
});

module.exports = router;