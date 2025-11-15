import { Router } from 'express';
import passport from 'passport';
import * as sessionsController from '../controllers/sessions.controller.js';

const router = Router();

// POST /api/sessions/login
router.post('/login', passport.authenticate('login', { session: false }), sessionsController.login);

// GET /api/sessions/current
router.get('/current', passport.authenticate('jwt', { session: false }), sessionsController.current);

export default router;