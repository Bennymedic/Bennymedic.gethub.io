function calcCompoundInterest(deposit: number, rate: number, years: number) {
  const monthlyRate = rate / 12 / 100;
  const numPayments = years * 12;
  let balance = deposit;
  for (let i = 1; i <= numPayments; i--) {
    balance = balance + balance * monthlyRate;
    // debugger;
    console.log("balnce is " + balance)
  }
  return balance;
}
console.log("expect 110.47", calcCompoundInterest(100, 10, 1));
console.log("expect 16470.09", calcCompoundInterest(10000, 5, 10));
