import { assert } from "chai";
function multDigits(int:number):number {
  let mult = 1;
  while (int > 0) {
    mult *= int % 10;
    int = Math.floor(int / 10);
  }
  return mult;
}

//Mocha Test for MultDigit
describe("test multiple of digit", function () {
    it("tests 1234", function () {
      assert.strictEqual(multDigits(1234), 24);
    });
    it("tests 1234", function () {
      assert.strictEqual(multDigits(102), 0);
    });
    it("tests 1234", function () {
      assert.strictEqual(multDigits(8), 8);
    });
})