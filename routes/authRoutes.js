const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// POST route for user registration
router.post('/register', register);

// POST route for user login
router.post('/login', login);

module.exports = router;
