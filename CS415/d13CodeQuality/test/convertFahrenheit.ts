import { assert } from "chai";
function convertFahrenheit(TempFahr:number):number{
    const TempCel = (TempFahr - 32) * 5/9;
    return TempCel;
}
console.log("expect 0: ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0));
console.log("expect 100: ", convertFahrenheit (212));
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