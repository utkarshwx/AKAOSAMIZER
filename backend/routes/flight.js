const express = require('express');
const { getFlightByPNR, handleDisruption } = require('../controllers/flightController');

const router = express.Router();

router.get('/status/:pnr', getFlightByPNR); // Get flight status by PNR
router.post('/disruption/:pnr', handleDisruption); // Handle flight disruption

module.exports = router;
