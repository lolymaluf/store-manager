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

const deleteSale = async (id) => {
  const result = await salesModel.salesId(id);
  if (result.length < 1) return { type: 404, message: 'Sale not found' };
  return salesModel.deleteSale(id);
};

/* const updateSale = async (id, name) => {
  const isSale = await salesModel.salesId(id);
  if (!isSale) return null;
  const sale = await salesModel.updateSale(id, name);
  return sale;
}; */

module.exports = {
  salesList,
  salesId,
  deleteSale,
  /* updateSale, */
};