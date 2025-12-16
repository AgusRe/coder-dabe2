import Cart from '../../models/cart.model.js';

export default class CartsDAO {
  create = () => Cart.create({ products: [] });

  getById = (cid) =>
    Cart.findById(cid).populate('products.product');

  update = (cid, cart) =>
    Cart.findByIdAndUpdate(cid, cart, { new: true });
}
