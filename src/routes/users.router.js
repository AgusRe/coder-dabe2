import {Router} from 'express';
import User from '../models/user.model.js';
import { createHash } from '../utils/hash.js';

const router = Router();

// Consultar todos los usuarios
router.get('/', async (req, res) => {

    try {
        const result = await userModel.find();
        res.send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
});

// Crear un usuario
router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, age, password } = req.body;

    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Todos los campos obligatorios son requeridos"
      });
    }

    const newUser = await User.create({
      first_name,
      last_name,
      email,
      age,
      password: createHash(password),
    });

    res.status(201).json({
      status: "success",
      user: newUser
    });

  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message
    });
  }
});

// Actualizar un usuario
router.put('/:uid', async (req, res) => {
    const uid = req.params.uid;
    const {name, age, email} = req.body;
    try {
        const user = await userModel.findOne({_id: uid});
        if (!user) throw new Error('User not found');

        const newUser = {
            name: name ?? user.name,
            age: age ?? user.age,
            email: email ?? user.email
        }

        const updateUser = await userModel.updateOne({_id: uid}, newUser);
        res.send({
            status: 'success',
            payload: updateUser
        });

    } catch (error) {
        res.status(400).send({
            status: 'error',
            message: error.message
        });
    }
});

// Eliminar un usuario
router.delete('/:uid', async (req, res) => {
    const uid = req.params.uid;
    try {
        const result = await userModel.deleteOne({_id: uid});
        res.status(200).send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(400).send({
            status: 'error',
            message: error.message
        });
    }
});

export default router;