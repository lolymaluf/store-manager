const productService = require('../services/products.services');

const getAllProducts = async (req, res) => {
  const products = await productService.getallProducts();
  return res.status(200).send(products); 
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getaProductById(id);
  if (!product) {
    res.status(404).json({ message: 'Produc t not found' });
  } else {
    return res.status(200).send(product);
  }
};

module.exports = {
  getAllProducts,
  getProductsById,
};