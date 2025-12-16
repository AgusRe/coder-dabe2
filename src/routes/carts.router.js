import express from 'express';
import passport from 'passport';
import { authorizeRoles } from '../middlewares/roles.middleware.js';
import * as controller from '../controllers/carts.controller.js';

const router = express.Router();

router.post(
  '/:cid/products/:pid',
  passport.authenticate('jwt', { session: false }),
  authorizeRoles('user'),
  controller.addProduct
);

export default router;
