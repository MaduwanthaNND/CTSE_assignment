// model file for Delivery
const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
    delivery_code: {type: String, required: true, trim: true},
    order_number: {type: String, required:true},
    delivery_address: {type: String, required:true},
    delivery_date: {type: String, required:true},
    driver_name: {type: String, required: true, trim: true},
    vehicle_number: {type: String, required:true}
});

const Delivery = mongoose.model('delivery', DeliverySchema);
module.exports = Delivery;