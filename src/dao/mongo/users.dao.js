import User from '../../models/user.model.js';

export default class UsersDAO {
  getByEmail = (email) => User.findOne({ email });
  getById = (id) => User.findById(id);
  create = (user) => User.create(user);
  updatePassword = (id, password) =>
    User.findByIdAndUpdate(id, { password });
}
