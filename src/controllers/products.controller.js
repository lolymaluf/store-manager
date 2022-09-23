const productService = require('../services/products.services');

const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  return res.status(200).send(products); 
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductById(id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    return res.status(200).send(product);
  }
};

module.exports = {
  getAllProducts,
  getProductsById,
};