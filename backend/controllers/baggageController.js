const Baggage = require('../models/Baggage');
const axios = require('axios');

// Get a single baggage by tag
exports.getBaggageByTag = async (req, res) => {
    const { tag } = req.params;

    try {
        const baggage = await Baggage.findOne({ tag }); // Fetch baggage by tag
        if (!baggage) {
            return res.status(404).json({ message: 'Baggage not found' });
        }
        res.json(baggage);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching baggage data', error });
    }
};

// Track baggage
exports.trackBaggage = async (req, res) => {
    const { tag } = req.params;

    try {
        // Fetch baggage details via external API
        const response = await axios.get(`https://external-baggage-api.com/baggage/${tag}`);
        const baggageData = response.data;

        if (!baggageData) {
            return res.status(404).json({ message: 'Baggage not found' });
        }

        res.json(baggageData);
    } catch (error) {
        res.status(500).json({ message: 'Error tracking baggage', error });
    }
};
