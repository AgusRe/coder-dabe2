import ProductsRepository from '../repositories/products.repository.js';

const productsRepo = new ProductsRepository();

export const create = async (req, res) => {
  const product = await productsRepo.createProduct(req.body);
  res.json({ status: 'success', product });
};

export const update = async (req, res) => {
  const product = await productsRepo.updateProduct(
    req.params.pid,
    req.body
  );
  res.json({ status: 'success', product });
};

export const remove = async (req, res) => {
  await productsRepo.deleteProduct(req.params.pid);
  res.json({ status: 'success' });
};
