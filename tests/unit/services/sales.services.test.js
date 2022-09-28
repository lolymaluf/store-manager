const { expect } = require("chai");
const sinon = require("sinon");

const salesModel = require("../../../src/models/sales.model");
const salesServices = require("../../../src/services/sales.services");

const {
  salesMock,
  product,
  productId,
  salesProductId,
} = require("./mocks/sales.mock");

describe("Testa Sales Services", () => {
  afterEach(async () => {
    sinon.restore();
  });

  it("Testa se função salesList retorna lista de produtos", async () => {
    sinon.stub(salesModel, "salesList").resolves(salesMock);
    const result = await salesServices.salesList();
    expect(result).to.equal(salesMock);
  });

  it("Testa a função salesId da Services", async () => {
    sinon.stub(salesModel, "salesId").resolves(salesProductId);
    const result = await salesServices.salesId(1);
    expect(result).to.deep.equal({ type: null, message: salesProductId });
  });

  it("Testa a função salesId da Services se nao existir", async () => {
    sinon.stub(salesModel, "salesId").resolves([]);
    const result = await salesServices.salesId(999);
    expect(result).to.deep.equal({ type: 404, message: "Sale not found" });
  });

  it("Testa função deleteSale da Services", async () => {
    sinon.stub(salesModel, "deleteSale").resolves(product);
    const results = await salesServices.deleteSale(1);
    expect(results).to.deep.equal(product);
  });
});
