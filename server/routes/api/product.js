const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

router.get('/', async (req, res)=> {
    const _id = req.query.productId;
    const product = await Product.findOne({_id});
    res.json({product});
});

module.exports = router;