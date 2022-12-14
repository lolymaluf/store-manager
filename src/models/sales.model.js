const connection = require('./db/connection');

const salesList = async () => {
  const query = 'SELECT  sp.sale_id AS saleId, s.date, sp.product_id AS productId, sp.quantity '
    + 'FROM StoreManager.sales AS s '
    + 'JOIN StoreManager.sales_products AS sp ON s.id = sp.sale_id '
    + 'ORDER BY sale_id, product_id;';
  const [result] = await connection
    .execute(query);
  return result;
};

const salesId = async (id) => {
  const query = 'SELECT s.date, sp.product_id AS productId, sp.quantity '
    + 'FROM StoreManager.sales AS s '
    + 'JOIN StoreManager.sales_products AS sp ON s.id = sp.sale_id '
    + `WHERE sale_id = ${id};`;
  const [result] = await connection
    .execute(query);
  return result;
};

const deleteSale = async (id) => {
  const query = 'DELETE FROM StoreManager.sales WHERE id = ?';
  const [result] = await connection
    .execute(query, [id]);
  return result;
};

/* const updateSale = async (productId, quantity) => {
  await connection.execute(
    'UPDATE StoreManager.products SET quantity = ? WHERE id = ?',
    [quantity, productId],
  );
  return { productId, quantity };
}; */

module.exports = {
  salesList,
  salesId,
  deleteSale,
/*   updateSale, */
};
