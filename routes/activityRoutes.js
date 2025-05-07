const express = require('express');
const { listActivities, createActivity } = require('../controllers/activityController');
const router = express.Router();

// GET route to list activities
router.get('/', listActivities);

// POST route to create a new activity
router.post('/', createActivity);

module.exports = router;
