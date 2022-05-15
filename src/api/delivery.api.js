const express = require('express');
const router = express.Router();
const controller = require('../controllers/delivery.controller');

module.exports = function() {
    router.post('/create', controller.createDelivery);
    return router;
}