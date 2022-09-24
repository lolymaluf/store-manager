const salesModel = require('../models/sales.model');

const salesList = async () => {
  const sales = await salesModel.salesList();
  return sales;
};

const salesId = async (id) => {
  const sales = await salesModel.salesId(id);
  if (sales.length === 0) {
    return { type: 404, message: 'Sale not found' };
  }

  return { type: null, message: sales };
};

module.exports = {
  salesList,
  salesId,
};