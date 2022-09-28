const { expect } = require("chai");
const sinon = require("sinon");
const productService = require("../../../src/services/products.services");
const productController = require("../../../src/controllers/products.controller");

const {
  productsMock,
  product,
  productId,
  createProduct,
} = require("./mocks/controller.mock");

describe("Testa Products Controller", () => {
  afterEach(async () => {
    sinon.restore();
  });

  it("Testa se função getAllProducts da Controller", async () => {
    sinon
      .stub(productService, "getAllProducts")
      .resolves(productsMock.products);
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();
    await productController.getAllProducts(req, res);
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.send.calledWith(productsMock.products)).to.be.true;
  });

  it("Testa a função getProductById da Controller com status 200", async () => {
    sinon.stub(productService, "getProductById").resolves(productId);
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    await productController.getProductById(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.send.calledWith(productId)).to.be.true;
  });

  it("Testa a função getProductById da Controller com status 404", async () => {
    sinon.stub(productService, "getProductById").resolves();
    const req = { params: { id: 999 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getProductById(req, res);

    expect(res.status.calledWith(404)).to.be.true;
    expect(res.json.calledWith({ message: "Product not found" })).to.be.true;
  });

  it("Testa função registerProducts da Controller", async () => {
    sinon.stub(productService, "registerProducts").resolves(createProduct);
    const req = { body: createProduct };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productController.registerProducts(req, res);
    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledWith(createProduct)).to.be.true;
  });

  it("Testa função updateProduct da Controller com status 200", async () => {
    sinon.stub(productService, "updateProduct").resolves(product);
    const req = { params: { id: 1 }, body: createProduct };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.updateProduct(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(product)).to.be.true;
  });

  it("Testa a função updateProduct da Controller com status 404", async () => {
    sinon.stub(productService, "updateProduct").resolves();
    const req = { params: { id: 999 }, body: createProduct };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.updateProduct(req, res);

    expect(res.status.calledWith(404)).to.be.true;
    expect(res.json.calledWith({ message: "Product not found" })).to.be.true;
  });

    it("Testa função deleteThisProduct da Controller com status 204", async () => {
      sinon.stub(productService, "deleteThisProduct").resolves(product);
      
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productController.deleteThisProduct(req, res);

      expect(res.status.calledWith(204)).to.be.true;
      expect(res.json.calledWith()).to.be.true;
    });

    it("Testa função deleteThisProduct da Controller com status 404", async () => {
      sinon.stub(productService, "getProductById").resolves();
      const req = { params: { id: 999 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productController.deleteThisProduct(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: "Product not found" })).to.be.true;
    });

  it("Testa função searchProduct da Controller", async () => {
    sinon.stub(productService, "searchProduct").resolves(product);
    const req = { query: { product } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productController.searchProduct(req, res);
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(product)).to.be.true;
  });
});
