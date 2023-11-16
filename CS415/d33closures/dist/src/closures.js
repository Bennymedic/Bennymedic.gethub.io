/**
 *
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 *
 */
export function inArray(arr) {
    return function (num) {
        for (const ele of arr) {
            if (ele === num) {
                return true;
            }
        }
        return false;
    };
}
/**
 *
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 *
 */
export function inBetween(low, high) {
    return function (num) {
        if (num > low && num <= high) {
            return true;
        }
        return false;
    };
}
/**
 * @returns {Function} closure that returns it's number
 */
export function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            console.log("I am shooter ", i);
            return i;
        };
        shooters.push(shooter);
    }
    return shooters;
}
//army[0](); // the shooter number 0 shows 10
//army[5](); // and number 5 also outputs 10...
