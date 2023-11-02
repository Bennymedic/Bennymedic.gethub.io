//suppose have many functions to test and want tests in separate file
import { assert } from "chai"
/* import from functions.ts module-- note the .js extension (even though actual file is .ts */
import{computeSalesCommission} from "../src/Commission.js";
import{compoundInterest} from "../src/compoundInterest.js";
import{isVowel} from "../src/isVowel.js";
import{calcDistance} from "../src/calcDistance.js";
import{convertFahrenheit} from "../src/convertFahrenheit.js";
import{calcDownpayment} from "../src/Downpayment.js";
import{multDigits} from "../src/multDigit.js";
import{sumDigits} from "../src/sumDigits.js";

//Mocha test for Sales Commission
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

  
//Mocha test for isVowel
describe("isVowel", function () {

    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });

    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });    
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });          

    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });

    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});

//Mocha Test for calcDistance
describe("test distance between two points", function () {
    it("tests the distance while x1:0, y2:0, x2:5, y2:5", function () {
        const exact = calcDistance (0, 0, 5, 5);
        assert.strictEqual(+exact.toFixed(2), 7.07);
    });
    it("tests the distance while x1:4, y2:4, x2:10, y2:10", function () {
        const exact = calcDistance (4, 4, 10, 10);
        assert.strictEqual(+exact.toFixed(2), 8.49);
    });
    it("tests the distance while x1:2, y2:5, x2:8, y2:10", function () {
        const exact = calcDistance (2, 5, 8, 10);
        assert.strictEqual(+exact.toFixed(2), 7.81);
    });

})

//Mocha Test for convertFahrenheit
describe("test convered tempreture in celcius to fahrenheit", function () {
    it("tests 32°F", function () {
        const exact = convertFahrenheit(32);
        assert.strictEqual(+exact.toFixed(2), 0);
    });
    it("tests 0°F", function () {
        const exact = convertFahrenheit(0);
        assert.strictEqual(+exact.toFixed(2), -17.78);
    });
    it("tests 212°F", function () {
        const exact = convertFahrenheit(212);
        assert.strictEqual(+exact.toFixed(2), 100);
    });   
    it("tests 100°F", function () {
        const exact = convertFahrenheit(100);
        assert.strictEqual(+exact.toFixed(2), 37.78);
    });   
})

//Mocha Test for downPayment
describe("Test cost of House Down Payment", function () {
    it("tests $40000 cost", function () {
      assert.strictEqual(calcDownpayment(40000), 2000);
    });
    it("tests $50000 cost", function () {
      assert.strictEqual(calcDownpayment(50000), 2500);
    });
    it("tests $100000 cost", function () {
      assert.strictEqual(calcDownpayment(100000), 7500);
    });
    it("tests $250000 cost", function () {
      assert.strictEqual(calcDownpayment(250000), 25000);
    });
  });

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