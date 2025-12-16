import express from 'express';
import passport from 'passport';
import { authorizeRoles } from '../middlewares/roles.middleware.js';
import * as controller from '../controllers/products.controller.js';

const router = express.Router();

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  authorizeRoles('admin'),
  controller.create
);

router.put(
  '/:pid',
  passport.authenticate('jwt', { session: false }),
  authorizeRoles('admin'),
  controller.update
);

router.delete(
  '/:pid',
  passport.authenticate('jwt', { session: false }),
  authorizeRoles('admin'),
  controller.remove
);

export default router;
