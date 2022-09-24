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

module.exports = {
  salesList,
  salesId,
};