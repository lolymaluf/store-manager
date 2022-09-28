const { expect } = require("chai");
const sinon = require("sinon");

const salesModel = require("../../../src/models/sales.model");
const connection = require("../../../src/models/db/connection");

const {
  salesMock,
  product,
  productId,
} = require("./mocks/product.mock");

describe("Testa Sales Model", () => {

  afterEach(async () => {
    connection.execute.restore();
  });

  it("Testa se função salesList retorna lista de produtos", async () => {
    sinon.stub(connection, "execute").resolves([salesMock]);
    const result = await salesModel.salesList();
    expect(result).to.equal(salesMock);
  });

  it("Testa a função salesId", async () => {
    sinon.stub(connection, "execute").resolves([productId]);
    const result = await salesModel.salesId(1);
    expect(result).to.equal(productId);
  });


  it("Testa função deleteSale", async () => {
    sinon.stub(connection, "execute").resolves([product]);
    const results = await salesModel.deleteSale(1);

    const [, [paramId]] = response.firstCall.args;

    expect(response.calledOnce).to.be.true;
    expect(paramId).to.equal(1);
    expect(results).to.deep.equal(product);
  });
});