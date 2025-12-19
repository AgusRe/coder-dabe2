import UserModel from '../models/user.model.js';

export default class UsersDAO {
  async getUsers() {
    return await UserModel.find();
  }

  async createUser(userData) {
    return await UserModel.create(userData);
  }

  async getUserByEmail(email) {
    return await UserModel.findOne({ email });
  }
}
