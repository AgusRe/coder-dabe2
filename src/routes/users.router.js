import { Router } from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/users.controller.js';

const router = Router();

// GET /api/users
router.get('/', getUsers);

// GET /api/users/:uid
router.get('/:uid', getUserById);

// POST /api/users
router.post('/', createUser);

// PUT /api/users/:uid
router.put('/:uid', updateUser);

// DELETE /api/users/:uid
router.delete('/:uid', deleteUser);

export default router;
