const productModel = require('../models/products.model');

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();
  /* products.sort((a, b) => a - b); */
  return products;
};

const getProductById = async (id) => {
  const products = await productModel.getProductById(id);
  return products;
};

module.exports = {
  getAllProducts,
  getProductById,
};