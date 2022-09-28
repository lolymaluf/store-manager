const { expect } = require("chai");
const sinon = require("sinon");

const productsModel = require("../../../src/models/products.model");
const connection = require("../../../src/models/db/connection");

const {
  productsMock,
  product,
  productId,
  createProduct,
} = require("./mocks/product.mock");


describe("Testa Products Model", () => {

/*   before(async () => {
    sinon.stub(connection, "execute").resolves([productsMock]);
  }) */

  afterEach(async () => {
    connection.execute.restore();
  })

  it("Testa se função getAllProducts retorna lista de produtos", async () => {
    sinon.stub(connection, "execute").resolves([productsMock]);
    const result = await productsModel.getAllProducts();
    expect(result).to.equal(productsMock);
  });

  it("Testa a função getProductById", async () => {
    sinon.stub(connection, "execute").resolves([productId]);
    const result = await productsModel.getProductById(1);
    expect(result).to.equal(productId);
  });

  it("Testa função registerProducts", async () => {
    sinon.stub(connection, "execute").resolves([{ insertId: 4 }]);
    const results = await productsModel.registerProducts(createProduct);
    
    const [, [paramName]] = response.firstCall.args;

    expect(response.calledOnce).to.be.true;
    expect(paramName).to.equal("ProdutoX");
    expect(results).to.deep.equal(createProduct);
  });

  it("Testa função updateProduct", async () => {
    sinon.stub(connection, "execute").resolves([product]);
    const results = await productsModel.updateProduct(1, "Martelo de Thor");
    
    const [, [paramName], [paramId]] = response.firstCall.args;

    expect(response.calledOnce).to.be.true;
    expect(paramName).to.equal("Martelo de Thor");
    expect(paramId).to.equal(1);
    expect(results).to.deep.equal(product);
  });
  
  it("Testa função deleteThisProduct", async () => {
    sinon.stub(connection, "execute").resolves([product]);
    const results = await productsModel.deleteThisProduct(1);
    
    const [, [paramId]] = response.firstCall.args;

    expect(response.calledOnce).to.be.true;
    expect(paramId).to.equal(1);
    expect(results).to.deep.equal(product);
  });
  
  it("Testa função searchProduct", async () => {
    sinon.stub(connection, "execute").resolves([product]);
    const results = await productsModel.searchProduct("Martelo");
    
    const [, [paramName]] = response.firstCall.args;

    expect(response.calledOnce).to.be.true;
    expect(paramName).to.equal("Martelo");
    expect(results).to.deep.equal(product);
  });

});