const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const sendgrid = require('sendgrid');

router.post('/', async (req, res) => {
    const body = req.body;
    res.json({ body: req.body });
});

module.exports = router;