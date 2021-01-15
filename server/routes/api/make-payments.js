const express = require('express');
const router = express.Router();
const request = require('request');
const crypto = require('crypto');
const config = require('config');
let public_key;
let private_key;
let salt;

try {
    private_key = config.get('liqpayPrivateKey');
    public_key = config.get('liqpayPublicKey');
    salt = config.get('julietBeautyCryptoSalt');
} catch (err) {
    private_key = process.env.liqpayPrivateKey;
    public_key = process.env.liqpayPublicKey;
    salt = process.env.julietBeautyCryptoSalt;
}

router.get('/', async (req, res) => {
    const json_string = {
        public_key,
        action: 'pay',
        amount: '1',
        currency: 'UAH',
        description: 'Payment for Product',
        order_id: 'order_id_1',
        version: '3'
    };

    const buff = Buffer.from(JSON.stringify(json_string));
    const data = buff.toString('base64');
    const sign_string = private_key + data + private_key;

    const sha = crypto.createHash('sha1');
    sha.update(sign_string);
    const signature = sha.digest('base64');
    res.json({ signature, data })
});

module.exports = router;