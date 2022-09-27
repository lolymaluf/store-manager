const { expect } = require('chai');
const sinon = require('sinon');
const productService = require('../../../src/services/productsService');
const productControllers = require('../../../src/controllers/products.controller');

const products = require('./mocks/products.controllers.mock');

describe('Testa product controller', function () {
  it('Testa /products', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getAllProducts').resolves(products);

    await productControllers.getProductsById(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });

  it('Testa /products/:productId', async function () {
    const res = {};
    const req = 1;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getProductById').resolves(products);

    await productControllers.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });
});
