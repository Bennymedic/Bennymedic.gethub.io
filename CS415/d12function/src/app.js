"use strict";
// Question 1
function computeSalesCommission(isSaleried, sales) {
    const minSales = 300;
    const maxSales = 500;
    const minRate = 0.01;
    const midRate = 0.02;
    const maxRate = 0.03;
    let commision = null;
    if (sales < minSales) {
        commision = 0;
        return commision;
    }
    if (isSaleried) {
        if (sales < maxSales && sales >= minSales) {
            commision = sales * minRate;
        }
        else {
            commision = (minRate * maxSales) + (sales - maxSales) * midRate;
        }
    }
    else {
        if (sales <= maxSales && sales >= minSales) {
            commision = sales * midRate;
        }
        else {
            commision = (midRate * maxSales) + (sales - maxSales) * maxRate;
        }
    }
    return commision;
}
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));
// // //Question 2
// // inputs: initialAmount, annual interest rate and number of years:
// // Output:balace at the end of year
// // steps: get monthly insterest
// //          loop for number of months * number of years
// //          creating an array for putting the monthly balances
// //          looping through the number of months and adding the computed current monthly balances into the to balance
// function compoundInterest(intialAmount:number, annualIntRate:number, numYears:number):number{
//     //initial values
//     annualIntRate = annualIntRate / 100;
//     const months = 12 * numYears;
//     const monthlyIntRate = annualIntRate / 12;
//     //creating an array for putting the monthly balances
//     let balance = [intialAmount];
//     //looping through the number of months and adding the computed current monthly balances into the to balance
//     for (let i = 1; i<= months; i++){
//         let currentBalace = balance[i-1] + balance[i-1] * monthlyIntRate;
//         balance.push(currentBalace);
//     }
//     let endBalance = balance[balance.length - 1]
//     return endBalance;
// }
// console.log("expect 110.47", compoundInterest(100, 10, 1));
// console.log("expect 16470.09", compoundInterest(10000, 5, 10));
// // // Question 3
// //defining table
// //input:cost
// //output:downPayment
// //steps: initialize constant values
//        //check whether the cost falls in the listed payment ranges and calculate the down payment based on that
// function calcDownpayment(cost:number):number {
//   let downPayment = null;
//   const payment0 = 0;
//   const payment50k = 50000;
//   const payment100k = 100000;
//   const payment200k = 200000;
//   const minRate = 0.05;
//   const midRate = 0.1;
//   const maxRate = 0.15;
//   const firstPayment = 2500;
//   const secondPayment = 7500;
//   const thirdPayment = 20000;
//   if (cost > payment0 && cost < payment50k) {
//     downPayment = minRate * cost;
//   } else if (cost >= payment50k && cost < payment100k) {
//     downPayment = firstPayment + midRate * (cost - payment50k);
//   } else if (cost >= payment100k && cost < payment200k) {
//     downPayment = secondPayment + maxRate * (cost - payment100k);
//   } else {
//     downPayment = thirdPayment + midRate*(cost - payment200k);
//   }
//   return downPayment;
// }
// //Question 4
// //Sum digit
// function sumDigits(int:number):number {
//   let sum = 0;
//   while (int > 0) {
//     sum += int % 10;
//     int = Math.floor(int / 10);
//   }
//   return sum;
// }
// console.log(sumDigits(102));
// // //Mult digit
// function multDigits(int:number):number {
//   let mult = 1;
//   while (int > 0) {
//     mult *= int % 10;
//     int = Math.floor(int / 10);
//   }
//   return mult;
// }
// console.log(multDigits(102));
// //Question 5
// function convertFahrenheit(TempFahr:number):number{
//     const TempCel = (TempFahr - 32) * 5/9;
//     return TempCel;
// }
// console.log("expect 0: ", convertFahrenheit (32));
// console.log("expect -17.7778: ", convertFahrenheit (0));
// console.log("expect 100: ", convertFahrenheit (212));
// // //Question 6
// function calcDistance(x1:number, y1:number, x2:number, y2:number):number{
//     const distance = Math.sqrt(((x2 - x1)**2) + (y2 - y1)**2);
//     return distance;
// }
// console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));
