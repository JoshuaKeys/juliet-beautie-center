const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const config = require('config');
let public_key;
let private_key;

try {
    private_key = config.get('liqpayPrivateKey');
    public_key = config.get('liqpayPublicKey');
} catch (err) {
    private_key = process.env.liqpayPrivateKey;
    public_key = process.env.liqpayPublicKey;
}

router.get('/', async (req, res) => {
    const {
        order_id,
        amount,
        description,
    } = req.query;
    const json_string = {
        public_key,
        action: 'pay',
        amount,
        currency: 'USD',
        description,
        order_id,
        version: '3'
    };

    const buff = Buffer.from(JSON.stringify(json_string));
    const data = buff.toString('base64');
    console.log(private_key);
    const sign_string = private_key.trim() + data + private_key.trim();
    console.log(sign_string);

    const sha = crypto.createHash('sha1');
    sha.update(sign_string);
    const signature = sha.digest('base64');
    console.log({ signature, data, })
    res.json({ signature, data, sign_string })
});

module.exports = router;