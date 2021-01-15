const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const config = require('config');
const request = require('request');

let novaPoshtaKey;

try {
    novaPoshtaKey = config.get('novaPoshtaKey');
} catch (e) {
    novaPoshtaKey = process.env.novaPoshtaKey;
}

router.get('/', async (req, res) => {
    const { CityRecipient, Cost, Weight, SeatsAmount } = req.query;
    const body = {
        "apiKey": novaPoshtaKey,
        "modelName": "InternetDocument",
        "calledMethod": "getDocumentPrice",
        "methodProperties": {
            "CitySender": "db5c88e0-391c-11dd-90d9-001a92567626",
            CityRecipient,
            Weight,
            "ServiceType": "DoorsDoors",
            Cost,
            "CargoType": "Cargo",
            SeatsAmount,
        }
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