// /*
// 21.	Create bank object, bank, with methods:
// a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
// b.	credit(id, amount), adds positive amount to customer transaction list
// c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
// d.  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
// e.	getBankBalance:  returns sum of all customer balances
// The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
//   Customer objects will have properties customerId and customerTransactions, e.g., 
// {customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
// Add any necessary types to the above bank object.
// */

// type CustomerRecord = {
//   //interface for the transaction object
//   customerId: number;
//   customerTransactions: number[];
// };

// type Bank = {
//   //interface for the bank object
//   transactionsDB: CustomerRecord[];
//   saveTransaction: (customerId: number, amount: number) => void;
//   debit: (customerId: number, amount: number) => void;
//   credit: (customerId: number, amount: number) => void;
//   getBalance: (customerId: number) => number;
//   bankBalance: () => number;
// };

// export const bank = {} as Bank; //define bank object as type Bank

// bank.transactionsDB = [
//   { customerId: 1, customerTransactions: [10, 50, -40] },
//   { customerId: 2, customerTransactions: [10, 10, -10] },
//   { customerId: 3, customerTransactions: [5, -5, 55] },
// ];

// /* this is complete, no need to modify.
// Saves this amount to the customerTransactions array for customerId id. */
// bank.saveTransaction = function (customerId: number, amount: number) {
//   const customer = bank.transactionsDB.find(
//     (customer) => customer.customerId === customerId
//   );
//   if (customer) {
//     customer.customerTransactions.push(amount);
//   }
// };
// bank.debit = function (customerId: number, amount: number): void {
//   if (bank.getBalance(customerId) > amount) {
//     bank.transactionsDB[customerId - 1].customerTransactions.push(-1 * amount);
//   }
// };
// bank.credit = function (customerId: number, amount: number): void {
//   bank.transactionsDB[customerId - 1].customerTransactions.push(amount);
// };
// bank.getBalance = function (customerId: number): number {
//   let sum = 0;
//   const transactions = bank.transactionsDB[customerId - 1].customerTransactions;
//   for (const transaction of transactions) {
//     sum += transaction;
//   }
//   return sum;
// };

// bank.bankBalance = function (): number {
//   let sum = 0;
//   for (let i = 0; i < bank.transactionsDB.length; i++) {
//     let transactions = bank.transactionsDB[i].customerTransactions;
//     for (const transaction of transactions) {
//       sum += transaction;
//     }
//   }
//   return sum;
// };


// //Methods
// // 11. Get average age, round the result to keep only two decimals.

// // 12. Find the oldest man

type Person={
  name:string,
  age:number
}
function findOldestMan(arr:Person[]):Person{
  
  let oldest = 0;
  let nameOld:string ='';
  for (const person of arr){
    if (person.age > oldest){
     oldest = person.age;
     nameOld = person.name; 
    }
  }
  let result:Person = {name:nameOld, age:oldest};
  return result;
}
let arr= [{name:"ram",age:29}, {name:"syam",age:40}, {name:"ganga",age:19}];
// console.log('expect 75.33',getAverageAge(array));
console.log('expect {name:"syam",age:40}',findOldestMan(arr));