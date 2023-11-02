export function compoundInterest(
    intialAmount: number,
    annualIntRate: number,
    numYears: number
  ): number {
    //initial values
    annualIntRate = annualIntRate / 100;
    const months = 12 * numYears;
    const monthlyIntRate = annualIntRate / 12;
    //creating an array for putting the monthly balances
    let balance = [intialAmount];
    //looping through the number of months and adding the computed current monthly balances into the to balance
    for (let i = 1; i <= months; i++) {
      let currentBalace = balance[i - 1] + balance[i - 1] * monthlyIntRate;
      balance.push(currentBalace);
    }
    let endBalance = balance[balance.length - 1];
    return endBalance;
  }