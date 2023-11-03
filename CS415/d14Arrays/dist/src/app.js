console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 *
 * @param {number} aa is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(aa, b, c) {
    let maxNum = aa;
    if (maxNum < b) {
        maxNum = b;
    }
    if (maxNum < c) {
        maxNum = c;
    }
    return maxNum; //IMPLEMENT THIS -- DO NOT USE MATH.MAX
}
export function sum(arr) {
    let total = 0;
    for (const ele of arr) {
        total += ele;
    }
    return total;
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
// export function sum(arr: number[]): number{
// //IMPLEMENT THIS
//     return 0;
// }
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr) {
    let total = 1;
    for (const ele of arr) {
        total *= ele;
    }
    return total;
}
/* findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words
 * @returns {number} length of longest word
 */
export function findLongestWord(arr) {
    let long = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (long < arr[i].length) {
            long = arr[i].length;
        }
    }
    return long;
}
//4.
//reverseArray
export function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
//reverseArrayInPlace
export function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
//5.
export function scoreExams(studentAnswers, correctAnswer) {
    let result = [];
    for (let row of studentAnswers) {
        let count = 0;
        for (let i = 0; i < row.length; i++) {
            if (row[i] === correctAnswer[i]) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}
/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */
/**
 *
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
export function generateArray(rows, cols) {
    //IMPLEMENT THIS
    let newArr = [];
    let numbers = 0;
    for (let i = 0; i < rows; i++) {
        newArr.push([]);
        for (let j = 0; j < cols; j++) {
            numbers += 1;
            newArr[i].push(numbers);
        }
    }
    return newArr;
}
// Write code to create an array named scores and fill it with 5 test scores 10, 20, 30, 40 and 50.
// •
// Now write a function named findAverage, that takes an array as an argument and return average of the array values.
// •
// Call findAverage function passing array you created in step1 and save the return result in a variable, average.
// •
// Print the average, it should be 30 for this example.
// •
// Create a second array with values from 1 to 9 and find the average of the array values.
// •
// Should compute correct average for an array of any size.
// const scores: number[] = [10, 20, 30, 40, 50];
// function findAverage(arr: number[]): number {
//   let sum = 0;
//   let average = 0;
//   for (let ele of arr) {
//     sum += ele;
//   }
//   average = sum / arr.length;
//   return average;
// }
// console.log(findAverage(scores));
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(findAverage(numbers));
// //checking if the expression is Balaced
// function isBalaced(exp: string[]): string {
//   let leftBracket = "";
//   let rightBracket = "";
//   for (let ele of exp) {
//     if (ele === "{") {
//       leftBracket += ele;
//     } else {
//       rightBracket += ele;
//     }
//   }
//   if (leftBracket.length === rightBracket.length) {
//     return "balanced";
//   } else {
//     return "not balnced";
//   }
// }
// const expression = ["{", "}", "{", "{"];
// console.log(isBalaced(expression));
// // sum of all elements
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// function sumArray(arr: number[][]): number {
//   let sum = 0;
//   for (const ele of arr) {
//     for (const chr of ele) {
//       sum += chr;
//     }
//   }
//   return sum;
// }
// console.log(sumArray(matrix));
