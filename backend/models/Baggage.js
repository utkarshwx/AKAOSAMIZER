const mongoose = require('mongoose');

const baggageSchema = new mongoose.Schema({
    tag: { type: String, required: true, unique: true },
    status: String,
    flight: String
});

module.exports = mongoose.model('Baggage', baggageSchema);
