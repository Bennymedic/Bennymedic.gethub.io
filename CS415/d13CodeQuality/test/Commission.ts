import { assert } from "chai";
function computeSalesCommission(isSaleried: boolean, sales: number): number {
  const minSales = 300;
  const maxSales = 500;
  const minRate = 0.01;
  const midRate = 0.02;
  const maxRate = 0.03;
  let commision = null;
  if (sales < minSales) {
    commision = 0;
    return commision;
  }
  if (isSaleried) {
    if (sales < maxSales && sales >= minSales) {
      commision = sales * minRate;
    } else {
      commision = minRate * maxSales + (sales - maxSales) * midRate;
    }
  } else {
    if (sales <= maxSales && sales >= minSales) {
      commision = sales * midRate;
    } else {
      commision = midRate * maxSales + (sales - maxSales) * maxRate;
    }
  }
  return commision;
}

//Mocha test for sales commision
describe("test of ComputSalesCommission", function () {
  it("tests salaried and 200 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 200), 0);
  });
  it("tests not salaried and 200 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 200), 0);
  });
  it("tests salaried and 300 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 300), 3);
  });
  it("tests not salaried and 300 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 300), 6);
  });
  it("tests salaried and 3500 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
  });
  it("tests not salaried and 3500 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
  });
});
