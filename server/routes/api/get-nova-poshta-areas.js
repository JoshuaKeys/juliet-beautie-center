const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const request = require('request');

try {
    novaPoshtaKey = config.get('novaPoshtaKey');
} catch (e) {
    novaPoshtaKey = process.env.novaPoshtaKey;
}


router.get('/', async (req, res) => {

    const body = {
        "apiKey": novaPoshtaKey,
        "modelName": "Address",
        "calledMethod": "getAreas"
    }
    request.post('https://api.novaposhta.ua/v2.0/json/', {
        body: JSON.stringify(body)
    }, (error, response) => {
        if (!error) {
            const body = JSON.parse(response.body);
            res.json(body.data);
        }
    })
});

module.exports = router;