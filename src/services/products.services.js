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

const registerProducts = async (productCreated) => {
  const result = await productModel.registerProducts(productCreated);
  return { id: result.insertId, name: productCreated };
};

const updateProduct = async (id, name) => {
  const idProduct = await productModel.getProductById(id);
  if (!idProduct) return null;
  const product = await productModel.updateProduct(id, name);
  return product;
};

const deleteThisProduct = async (id, name) => {
  const idProduct = await productModel.getProductById(id);
  if (!idProduct) return null;
  const product = await productModel.deleteThisProduct(id, name);
  return product;
};

const searchProduct = async (term) => {
  const result = await productModel.searchProduct(term);
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  registerProducts,
  updateProduct,
  deleteThisProduct,
  searchProduct,
};