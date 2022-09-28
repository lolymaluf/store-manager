const productService = require('../services/products.services');

const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  return res.status(200).send(products); 
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductById(id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    return res.status(200).send(product);
  }
};

const registerProducts = async (req, res) => {
  const { name } = req.body;
  const productCreated = await productService.registerProducts(name);
  return res.status(201).json(productCreated);
}; 

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const response = await productService.updateProduct(id, name);
  if (!response) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(response);
};

const deleteThisProduct = async (req, res) => {
  const { id } = req.params;
  const response = await productService.deleteThisProduct(id);
  if (!response) return res.status(404).json({ message: 'Product not found' });
  console.log('response', response);
  return res.status(204).json();
  // ou .end() para não enviar nada
  // res.sendStatus(204);
};

const searchProduct = async (req, res) => {
  const { q } = req.query;
  const result = await productService.searchProduct(q);

  return res.status(200).json(result);
};

module.exports = {
  getAllProducts,
  getProductById,
  registerProducts,
  updateProduct,
  deleteThisProduct,
  searchProduct,
};