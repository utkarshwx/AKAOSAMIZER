const express = require('express');
const { trackBaggage } = require('../controllers/baggageController');

const router = express.Router();

router.get('/track/:tag', trackBaggage);  // Track baggage by tag number

module.exports = router;
