import { assert } from "chai";
function compoundInterest(
  intialAmount: number,
  annualIntRate: number,
  numYears: number
): number {
  //initial values
  annualIntRate = annualIntRate / 100;
  const months = 12 * numYears;
  const monthlyIntRate = annualIntRate / 12;
  //creating an array for putting the monthly balances
  let balance = [intialAmount];
  //looping through the number of months and adding the computed current monthly balances into the to balance
  for (let i = 1; i <= months; i++) {
    let currentBalace = balance[i - 1] + balance[i - 1] * monthlyIntRate;
    balance.push(currentBalace);
  }
  let endBalance = balance[balance.length - 1];
  return endBalance;
}

//Mocha test for compound interest
describe("test of compoundInterest", function () {
  it("tests $7000 for 3 year at 8% monthly compound", function () {
    const exact = compoundInterest(7000, 8, 3);
    assert.strictEqual(+exact.toFixed(2), 8891.66);
  });
  it("tests $5000 for 2 year at 7% monthly compound", function () {
    const exact = compoundInterest(5000, 7, 2);
    assert.strictEqual(+exact.toFixed(2), 5749.03);
  });
  it("tests $100 for 1 year at 10% monthly compound", function () {
    const exact = compoundInterest(100, 10, 1);
    assert.strictEqual(+exact.toFixed(2), 110.47);
  });
  it("tests $10000 for 5 years at 10% monthly compound", function () {
    const exact = compoundInterest(10000, 5, 10);
    assert.strictEqual(+exact.toFixed(2), 16470.09);
  });
});
