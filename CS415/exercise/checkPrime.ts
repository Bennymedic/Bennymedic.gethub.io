//basic example of using mocha (test code in same file)

import { assert } from "chai";

import{checkPrime, ssReverse} from "../d13CodeQuality/src/functions.js";
describe("checkPrime returnstrueifargumentisprime",function(){
it("37isprime",function(){
assert.strictEqual(checkPrime(37),true);
});
it("77isnotprime",function(){
assert.strictEqual(checkPrime(77),false);
});
});
describe("ssReverse", function () {
it("[1, 2, 3, 4]", function () {//test array equality
assert.deepStrictEqual(ssReverse([1, 2, 3, 4 ]), [4,3,2,1] );
});
});