import Product from '../../models/product.model.js';

export default class ProductsDAO {
  getAll = () => Product.find();
  getById = (id) => Product.findById(id);
  create = (product) => Product.create(product);
  update = (id, data) =>
    Product.findByIdAndUpdate(id, data, { new: true });
  delete = (id) => Product.findByIdAndDelete(id);
}
