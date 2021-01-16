const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const sendgrid = require('sendgrid');
const crypto = require('crypto');
const Liqpay = require('liqpayjs-sdk')


let private_key;
let public_key

try {
    private_key = config.get('liqpayPrivateKey');
    public_key = config.get('liqpayPublicKey');
} catch (err) {
    private_key = process.env.liqpayPrivateKey;
    public_key = process.env.liqpayPublicKey;
}

var liqpay = new Liqpay(public_key, private_key);



router.post('/', async (req, res) => {
    const { data, signature } = req.body;
    var sign = liqpay.str_to_sign(private_key + data + private_key)
    res.json({ body: signature === sign && "payment received" });
});

module.exports = router;