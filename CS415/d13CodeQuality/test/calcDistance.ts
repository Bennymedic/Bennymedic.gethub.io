import { assert } from "chai";
function calcDistance(x1:number, y1:number, x2:number, y2:number):number{
    const distance = Math.sqrt(((x2 - x1)**2) + (y2 - y1)**2);
    return distance;
}
console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));

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