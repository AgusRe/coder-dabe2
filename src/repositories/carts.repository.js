import CartsDAO from '../dao/mongo/carts.dao.js';

export default class CartsRepository {
  constructor() {
    this.dao = new CartsDAO();
  }

  createCart = () => this.dao.create();
  getCartById = (cid) => this.dao.getById(cid);
  updateCart = (cid, cart) => this.dao.update(cid, cart);
}
