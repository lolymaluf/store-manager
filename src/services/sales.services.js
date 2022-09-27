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

/* const deleteSale = async (id) => {
  const [verifySaleId] = await salesModel.salesId(id);
  if (!verifySaleId) return { type: 404, message: 'Sale not found' };
  const sales = await salesModel.deleteSale(id);
  return sales;
}; */

const deleteSale = async (id) => {
  const result = await salesModel.salesId(id);
  if (result.length < 1) return { type: 404, message: 'Sale not found' };
  return salesModel.deleteSale(id);
};

module.exports = {
  salesList,
  salesId,
  deleteSale,
};