const connection = require('./db/connection');

const getAllProducts = async () => {
  const [products] = await connection
    .execute('SELECT * FROM StoreManager.products ORDER BY id');
  return products;
};

const getProductById = async (id) => {
  const [[products]] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return products;
};

const registerProducts = async (name) => {
  const [result] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  console.log('result:', result);
  return result;
};

const updateProduct = async (id, name) => {
  await connection
    .execute('UPDATE StoreManager.products SET name = ? WHERE id = ?', [name, id]);
  return { id, name };
};

const deleteThisProduct = async (id) => {
  const result = await connection
    .execute('DELETE FROM StoreManager.products WHERE id = ?', [id]);
  return result;
};

const searchProduct = async (term) => {
  const [result] = await connection
    .execute(
      'SELECT id, name FROM StoreManager.products WHERE name LIKE ?', [`%${term}%`],
    );
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