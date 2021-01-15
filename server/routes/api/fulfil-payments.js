const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

router.get('/', async (req, res) => {
    console.log(req.body);
    res.json({ data: 'hello' });
});

module.exports = router;