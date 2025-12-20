import UserModel from '../../models/user.model.js';

export default class UsersDAO {
  getAll = async () => {
    return await UserModel.find();
  };

  getById = async (id) => {
    return await UserModel.findById(id);
  };

  create = async (userData) => {
    return await UserModel.create(userData);
  };

  update = async (id, userData) => {
    return await UserModel.updateOne({ _id: id }, userData);
  };

  delete = async (id) => {
    return await UserModel.deleteOne({ _id: id });
  };
}
