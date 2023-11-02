import { assert } from "chai";
function sumDigits(int:number):number {
  let sum = 0;
  while (int > 0) {
    sum += int % 10;
    int = Math.floor(int / 10);
  }
  return sum;
}

//Mocha Test for sumDigit
describe("test sum of digit", function () {
    it("tests 1234", function () {
      assert.strictEqual(sumDigits(1234), 10);
    });
    it("tests 1234", function () {
      assert.strictEqual(sumDigits(102), 3);
    });
    it("tests 1234", function () {
      assert.strictEqual(sumDigits(8), 8);
    });
 
  });