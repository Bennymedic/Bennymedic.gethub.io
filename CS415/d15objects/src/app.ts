//use this file for any code you want to try out
type user = {
    name?:string,
    age:number
  }
  
  let user:user ={
    name: 'Abebe',
    age: 23
  }


//   let admin  = {
//     name?: 'Tedy',
//     age: true,
//     sex: "m"
//   }


 delete user.name;
  console.log(user)

//   let sample: user = {
//       name: 'Abebe',
//     age: 23
//   }
//   type Person = {
//     name: string;
//     age: number;
//     }
//   function greet(person: Person) {
//     return "Hello " + person.name;
//     }
//     const sample = {
//         name: 'Tedy',
//         age: 45
//     }
//     console.log(greet(sample))

// Create 3 objects, student1, student2, student3
// ➢
// property studentId : 101, 102, 103 respectively
// ➢property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively

// interface Student {
//     studentId : number,
//     quizeAnswers: number[]
// }
// const student1 : Student = {
//     studentId: 101,
//     quizeAnswers: [1, 1, 2,4]
// } 

// const student2 : Student = {
//     studentId: 102,
//     quizeAnswers: [2, 1, 2,2]
// } 

// const student3 : Student = {
//     studentId: 103,
//     quizeAnswers: [3, 1, 3,4]
// } 

// const students:Student[] = [student1, student2, student3]
// const correctAnswers = [3,1,2,4];


// function gradeQuiz(student:Student[], correct:number[]): number[]{
//     let count = 0;
//     const resultArr = [];
//     for (const ele of student){
//         count = 0;
//         let value = ele.quizeAnswers;
//         for(let i = 0; i < value.length; i++){
//             if ( value[i]=== correct[i]){
//                 count++;
//             }
//         }
//         resultArr.push(count);
//     }
//     return resultArr;
// }
// const users = gradeQuiz(students, correctAnswers);
// console.log(users);
// // [
// //     { id: 101, score: 3 },
// //     { id: 102, score: 2 },
// //     { id: 103, score: 3 }];

// interface Score {
//     id:number,
//     score: number
// }


// function gradeQuizlabel(student:Student[], correct:number[]): Score[]{
//     let count = 0;
//     const resultArr:Score[] = [];
//     for (const ele of student){
//         count = 0;
//         let value = ele.quizeAnswers;
//         for(let i = 0; i < value.length; i++){
//             if ( value[i]=== correct[i]){
//                 count++;
//             }
//         }
//         let scoreObj:Score = {id:ele.studentId, score: count}
//         resultArr.push(scoreObj);
//     }
//     return resultArr;
// }
// const scores = gradeQuizlabel(students, correctAnswers);
// console.log(scores)


/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d.  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
Add any necessary types to the above bank object.
*/

type CustomerRecord = {
    //interface for the transaction object
    customerId: number;
    customerTransactions: number[];
  };
  
  type Bank = {
    //interface for the bank object
    transactionsDB: CustomerRecord[];
    saveTransaction: (customerId: number, amount: number) => void;
    debit: (customerId: number, amount: number) => void;
    credit: (customerId: number, amount: number) => void;
    getBalance: (customerId: number) => number;
    bankBalance: () => number;
  };
  
const bank = {} as Bank; //define bank object as type Bank
  
  bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] },
  ];

  bank.debit = function(customerId: number, amount: number):void{
    let balance = this.getBalance(customerId);
    if(balance > amount){
        bank.transactionsDB[customerId - 1].customerTransactions.push(-1 * amount);
    }
  }
  bank.credit = function (customerId: number, amount: number):void{
    bank.transactionsDB[customerId - 1].customerTransactions.push(amount);
  }
  bank.getBalance = function(customerId: number):number{
    let balance =0;
    const customerSaving = bank.transactionsDB[customerId - 1].customerTransactions;
    for (const transaction of customerSaving){
        balance += transaction;
    }
    return balance;
  }

  type Person = {
    name: string;
    age: number;
    job: string;
    sayHi(this: Person): void;
    }
    const manager: Person = {
    name: "John",
    age: 27,
    job: "Software Engineer",
    // sayHi: sayHowdy,
    sayHi(){
      console.log("Hello, my name is ", this.name);
    }
  }
    const intern: Person= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    sayHi: sayHowdy
    };
    function sayHowdy(this: Person) {
    console.log("Hello, my name is ", this.name);
    }
    10