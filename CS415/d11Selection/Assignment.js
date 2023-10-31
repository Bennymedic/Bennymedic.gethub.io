import promptSync from "prompt-sync";
const prompt = promptSync();

// Question 1
function salesCommision(isSaleried, sales){
    const minSales = 300;
    const maxSales =500;
    const minRate = 0.01;
    const midRate =0.02;
    const maxRate =0.03;
    let commision = null;
    if(sales < minSales){
            commision = 0;
            return commision;
        }
    if(isSaleried === "saleried"){
        if(sales<=maxSales && sales >=minSales){
            commision = sales * midRate;
        }
        else{
            commision = sales * midRate;
        }
    }
    else{
        if(sales<=maxSales && sales >=minSales){
            commision = sales * midRate;
        }
        else{
            commision = sales * maxRate;
        }
    }
    return commision;
}
console.log(salesCommision("saleried", 600))

//Question 2
const age = prompt('please enter you age');
while(age !== "18"){
    age = prompt('please enter you age');
    console.log(age)
}

//Allternative answer using do while loop
do {
   let age = prompt('please enter you age');
}while(age !== "18")


//Question 3
function computeBalance(){
    //initial inputs from the user
    const intialAmount = Number(prompt("Please enter the initial amount: "));
    const annualIntRate = Number(prompt("Please enter the annual interest rate: "));
    const numYears = Number(prompt("Please enter the number of years to compund: "));
    //initial values
    const months = 12 * numYears;
    const monthlyIntRate = annualIntRate / 12;
    //creating an array for putting the monthly balances
    let balance = [intialAmount];
    //looping through the number of months and adding the computed current monthly balances into the to balance 
    for (let i = 1; i< months; i++){
        let currentBalace = balance[i-1] + balance[i-1] * monthlyIntRate;
        balance.push(currentBalace);
    }
    console.log(balance)
}
computeBalance()

//Question 4)i
function leanPatern(num){
    for(let i = 1; i <=5; i++){
        let outputs=[]
        for(let i = 1; i <=5; i++){
            outputs.push(i)
        }
        console.log(outputs.join(''))
    }
}
leanPatern(5)

//Question 4)ii
function stepFL(num){
    let result;
    for (let i=1; i<=num; i++){
        let repeatedNum = i.toString().repeat(i);
        let space = ' '.repeat(num-i);
        result = repeatedNum + space;
        console.log(result)
    }
}
stepFL(5)

//Question 4)iii
function stepLF(num){
    let result;
    for (let i=0; i<num; i++){
        let repeatedNum = (num-i).toString().repeat(num-i);
        let space = ' '.repeat(i);
        result = repeatedNum + space;
        console.log(result)
    }
}
stepLF(5)


// Question 5.
function calcDownPayment() {
  const cost = Number(prompt("Please eneter the cost of the house: "));
  let downPayment = null;
  const payment0 = 0;
  const payment50k = 50000;
  const payment100k = 100000;
  const payment200k = 200000;
  const minRate = 0.05;
  const midRate = 0.1;
  const maxRate = 0.15;
  const firstPayment = 1000;
  const secondPayment = 2000;
  const thirdPayment = 5000;
  if (cost > payment0 && cost <= payment50k) {
    downPayment = minRate * cost;
  } else if (cost > payment50k && cost <= payment100k) {
    downPayment = firstPayment + midRate * (cost - payment50k);
  } else if (cost > payment100k && cost <= payment200k) {
    downPayment = secondPayment + maxRate * (cost - payment100k);
  } else {
    downPayment = thirdPayment + midRate(cost - payment200k);
  }
  return downPayment;
}

console.log(calcDownPayment());

//Question 6
function calcSum() {
  const inputNum = +(prompt("Please enter a number: "));
  let sum = Math.floor(inputNum / 10) + (inputNum % 10);
  return sum;
}
console.log(calcSum());
//or
// function calcSum() {
//     const inputNum = prompt("Please enter a number: ");
//     let sum = 0;
//     for (let ele of inputNum) {
//       sum += Number(ele);
//     }
//     return sum;
//   }
//   console.log(calcSum());


/* 
input: number
output: true of false
steps: loop from 2 to number -1 and check if the reminder is 0
*/