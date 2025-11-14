const express = require('express');
const passport = require('passport');
const router = express.Router();
const sessionsController = require('../controllers/sessions.controller');

// POST /api/sessions/login
router.post('/login', passport.authenticate('login', { session: false }), sessionsController.login);

// GET /api/sessions/current
router.get('/current', passport.authenticate('jwt', { session: false }), sessionsController.current);

module.exports = router;
