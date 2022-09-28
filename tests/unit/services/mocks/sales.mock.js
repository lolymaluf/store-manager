salesMock = {
  products: [
    {
      id: 1,
      name: "Martelo de Thor",
    },
    {
      id: 2,
      name: "Traje de encolhimento",
    },
    {
      id: 3,
      name: "Escudo do Capitão América",
    },
  ],
};

const product = {
  id: 1,
  name: "Martelo de Thor",
};

const productId = [
  [
    {
      id: 1,
      name: "Martelo de Thor",
    },
  ],
];

const salesProductId = [
  {
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2,
  },
  {
    date: "2021-09-09T04:54:54.000Z",
    productId: 2,
    quantity: 2,
  },

];

const createProduct = [
  {
    name: "ProdutoX",
  },
];

module.exports = {
  salesMock,
  product,
  productId,
  createProduct,
  salesProductId,
};
