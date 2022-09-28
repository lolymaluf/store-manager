const { expect } = require("chai");
const sinon = require("sinon");

const productService = require("../../../src/services/products.services");
const productModel = require("../../../src/models/products.model");

const {
  productsMock,
  product,
  productId,
  createProduct,
} = require("../models/mocks/product.mock");


describe("Testa Products Service", () => {
  afterEach(async () => {
    sinon.restore();
  });

  it("Testa se função getAllProducts da Service", async () => {
    sinon.stub(productModel, "getAllProducts").resolves(productsMock.products);
    const products = await productService.getAllProducts();
    expect(products).to.deep.equal(productsMock.products);
  });

  it("Testa a função getProductById da Service", async () => {
    sinon.stub(productModel, "getProductById").resolves(productId);
    const result = await productService.getProductById(1);
    expect(result).to.equal(productId);
  });

  it("Testa função registerProducts da Service", async () => {
    sinon.stub(productModel, "registerProducts").resolves({ insertId: 4 });
    const results = await productService.registerProducts(createProduct.name);

    expect(results).to.deep.equal({ id: 4, name: createProduct.name });
  });

  it("Testa função updateProduct da Service", async () => {
    sinon.stub(productModel, "getProductById").resolves(product);
    const results = await productService.updateProduct(1, "Martelo de Thor");

    expect(results).to.deep.equal(product);
  });

    it("Testa updateProduct, se não existir", async () => {
      sinon.stub(productModel, "getProductById").resolves();
      const results = await productService.updateProduct(1, "Martelo de Thor");
      expect(results).to.deep.equal(null);
    });

    it("Testa função deleteThisProduct da Service", async () => {
      sinon.stub(productModel, "getProductById").resolves(product);
      sinon.stub(productModel, "deleteThisProduct").resolves();
    const results = await productService.deleteThisProduct(1);

    expect(results).to.deep.equal();
    });

    it("Testa deleteThisProduct, se não existir", async () => {
    sinon.stub(productModel, "getProductById").resolves();
    const results = await productService.deleteThisProduct(1, "Martelo de Thor");
    expect(results).to.deep.equal(null);
    });


  it("Testa função searchProduct da Service", async () => {
    sinon.stub(productModel, "searchProduct").resolves([product]);
    const results = await productService.searchProduct("Martelo");

    expect(results).to.deep.equal([product]);
  });
});