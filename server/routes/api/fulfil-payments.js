const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const sendgrid = require('sendgrid');
const crypto = require('crypto');
const Liqpay = require('liqpayjs-sdk');
const handlebars = require('handlebars');


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
    const { data, signature, } = req.body;
    const { order_id, info } = req.query;
    liqpay.api('request', {
        'action': 'status',
        'version': '3',
        order_id
    }, function (json) {
        console.log(info);
        res.redirect('/checkout/order-confirmation');
        // res.json({ json, info });
    })
})

module.exports = router;