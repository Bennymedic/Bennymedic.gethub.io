/**
 *@param {number} num the input
 *@returns {number} double the input
 */
export function double(num) {
    return num * 2;
}
/**
 * @param {number} num the input
 * @returns {number} 100 times the input
 */
export function times100(num) {
    return num * 100;
}
/**
 * @param {Array} arr input array
 * @param {function} callback input function
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(arr, callback) {
    let newArr = [];
    for (const ele of arr) {
        let newValue = callback(ele);
        newArr.push(newValue);
    }
    return newArr;
}
