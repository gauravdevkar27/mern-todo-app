const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controllers.js');
router.post('/register', AuthController.registerUser);

module.exports = router;