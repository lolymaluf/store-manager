const salesServices = require('../services/sales.services');

const salesList = async (req, res) => {
  const result = await salesServices.salesList();
  return res.status(200).json(result);
};

const salesId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesServices.salesId(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesServices.deleteSale(id);
  if (type) return res.status(type).json({ message });
  return res.status(204).json();
};

/* const updateSale = async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  const response = await salesServices.updateSale(productId, quantity);
  if (!response) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(response);
}; */

module.exports = {
  salesList,
  salesId,
  deleteSale,
 /*  updateSale, */
};