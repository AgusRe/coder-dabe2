import User from '../models/user.model.js';

const usersRepository = new UsersRepository();

export const createUser = async (req, res) => {
  try {
    const user = await usersRepository.createUser(req.body);

    res.status(201).json({
      status: "success",
      payload: user
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        status: "error",
        message: "El email ya está registrado"
      });
    }

    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await usersRepository.getUsers();

    res.json({
      status: 'success',
      payload: users
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.uid).select('-password');
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
    res.json({ status: 'success', user });
};

export const updateUser = async (req, res) => {
    const updates = { ...req.body };
    if (updates.password) delete updates.password; // password change via dedicated endpoint
    const user = await User.findByIdAndUpdate(req.params.uid, updates, { new: true }).select('-password');
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
    res.json({ status: 'success', user });
};

export const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.uid);
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
    res.json({ status: 'success', message: 'User deleted' });
};
