import * as cartsService from '../services/carts.service.js';

export const addProduct = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const cart = await cartsService.addProductToCart(cid, pid);
    res.json({ status: 'success', cart });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};
