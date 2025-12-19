import UsersDAO from '../dao/users.dao.js';

export default class UsersRepository {
  constructor() {
    this.dao = new UsersDAO();
  }

  getUsers() {
    return this.dao.getUsers();
  }

  createUser(userData) {
    return this.dao.createUser(userData);
  }

  getUserByEmail(email) {
    return this.dao.getUserByEmail(email);
  }
}
