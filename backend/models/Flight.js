const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    pnr: { type: String, required: true, unique: true },
    status: String,
    departureTime: Date,
    destination: String
});

module.exports = mongoose.model('Flight', flightSchema);
