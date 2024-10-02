const Flight = require('../models/Flight');
const axios = require('axios');

// Get a single flight by PNR
exports.getFlightByPNR = async (req, res) => {
    const { pnr } = req.params;

    try {
        const flight = await Flight.findOne({ pnr }); // Fetch flight by PNR
        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }
        res.json(flight);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching flight data', error });
    }
};

// Handle flight disruption
exports.handleDisruption = async (req, res) => {
    const { pnr } = req.params;
    const { action } = req.body; // e.g., rebook, refund, etc.

    try {
        const flight = await Flight.findOne({ pnr });
        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }

        // Handle disruption (e.g., offer rebooking options, compensation)
        if (action === 'rebook') {
            // Implement logic to find next available flights and rebook
        }

        res.json({ message: 'Disruption handled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error handling disruption' });
    }
};
