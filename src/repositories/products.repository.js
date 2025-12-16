import ProductsDAO from '../dao/mongo/products.dao.js';

export default class ProductsRepository {
  constructor() {
    this.dao = new ProductsDAO();
  }

  getAllProducts = () => this.dao.getAll();
  getProductById = (id) => this.dao.getById(id);
  createProduct = (product) => this.dao.create(product);
  updateProduct = (id, data) => this.dao.update(id, data);
  deleteProduct = (id) => this.dao.delete(id);
}
