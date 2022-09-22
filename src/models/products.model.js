const connection = require('./db/connection');

const getAllProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id',
  );
  return products;
};

const getProductById = async (id) => {
  const [[products]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return products;
};

module.exports = {
  getAllProducts,
  getProductById,
};