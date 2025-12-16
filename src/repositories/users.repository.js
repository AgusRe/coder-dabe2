import UsersDAO from '../dao/mongo/users.dao.js';

export default class UsersRepository {
  constructor() {
    this.dao = new UsersDAO();
  }

  getUserByEmail = (email) => this.dao.getByEmail(email);
  getUserById = (id) => this.dao.getById(id);
  createUser = (user) => this.dao.create(user);
  updatePassword = (id, password) =>
    this.dao.updatePassword(id, password);
}
