import CartsRepository from '../repositories/carts.repository.js';
import ProductsRepository from '../repositories/products.repository.js';

const cartsRepo = new CartsRepository();
const productsRepo = new ProductsRepository();

export const addProductToCart = async (cid, pid) => {
  const cart = await cartsRepo.getCartById(cid);
  if (!cart) throw new Error('Cart not found');

  const product = await productsRepo.getProductById(pid);
  if (!product) throw new Error('Product not found');

  const existingProduct = cart.products.find(
    p => p.product._id.toString() === pid
  );

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.products.push({ product: pid, quantity: 1 });
  }

  return cartsRepo.updateCart(cid, cart);
};
