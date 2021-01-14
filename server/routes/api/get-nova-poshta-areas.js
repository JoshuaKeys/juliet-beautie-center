const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const config = require('config');
const request = require('request');

router.get('/', async (req, res) => {

    const body = {
        "apiKey": config.get('novaPoshtaAPIKey'),
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