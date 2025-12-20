import UsersDAO from '../dao/mongo/users.dao.js';

export default class UsersRepository {
  constructor() {
    this.dao = new UsersDAO();
  }

  getAll = async () => this.dao.getAll();
  getById = async (id) => this.dao.getById(id);
  getByEmail = async (email) => this.dao.getByEmail(email);
  create = async (data) => this.dao.create(data);
  update = async (id, data) => this.dao.update(id, data);
  delete = async (id) => this.dao.delete(id);
}
