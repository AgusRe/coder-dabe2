import UsersRepository from '../repositories/users.repository.js';

const usersRepository = new UsersRepository();

export const getUsers = async (req, res) => {
  try {
    const users = await usersRepository.getAll();
    res.status(200).json({ status: 'success', payload: users });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await usersRepository.getById(uid);

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    res.status(200).json({ status: 'success', payload: user });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = await usersRepository.create(req.body);
    res.status(201).json({ status: 'success', payload: newUser });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { uid } = req.params;
    await usersRepository.update(uid, req.body);
    res.status(200).json({ status: 'success', message: 'User updated' });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { uid } = req.params;
    await usersRepository.delete(uid);
    res.status(200).json({ status: 'success', message: 'User deleted' });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};
