import UsersRepository from '../repositories/users.repository.js';

const usersRepository = new UsersRepository();

export const getAllUsersService = async () => {
  return await usersRepository.getAll();
};

export const getUserByIdService = async (uid) => {
  return await usersRepository.getById(uid);
};

export const createUserService = async (userData) => {
  return await usersRepository.create(userData);
};

export const updateUserService = async (uid, userData) => {
  return await usersRepository.update(uid, userData);
};

export const deleteUserService = async (uid) => {
  return await usersRepository.delete(uid);
};
