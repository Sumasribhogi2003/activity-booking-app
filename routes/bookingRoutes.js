const express = require('express');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// POST route to book an activity (authentication required)
router.post('/', auth, bookActivity);

// GET route to get all bookings for the authenticated user
router.get('/', auth, getMyBookings);

module.exports = router;
