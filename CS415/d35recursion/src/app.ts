import { type } from "os";
import { join } from "path";

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
type List = {
  value: number;
  next?: List | null;
};

function printList(list: List): void {
  let temp = list;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}

//Recursive way
function printListRec(list: List): void {
  console.log(list.value);
  if (list.next) {
    printListRec(list.next);
  }
  return;
}

//   Write a function, evenRecurse, that will use recursion to print all positive even numbers less than a given number, e.g.,
//   evenRecurse(7) will log 6,4,2,0
function evenRecurse(num: number): void {
  if (num % 2 == 0) {
    console.log(num);
  }
  if (num > 2) {
    evenRecurse(num - 1);
  }
}

// write a function, averagePoints, to get an array containing the average points across for each player . Then modify the function to return objects,

// Try with a regular for..of loop and then using map and reduce.
const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];
console.log("expect [1.33, 1, 1 ]: ", averagePoints(players));
//console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePointsLabeled (players));
type Player = {
  name: string;
  points: number[];
};

// type AveName ={
//     [key:string]: number
// }

function averagePoints(players: Player[]): number[] {
  let average: number[] = [];
  for (const player of players) {
    let total = 0;
    for (const point of player.points) {
      total += point;
    }
    average.push(total / player.points.length);
  }

  return average;
}

function averagePointsReduce(players: Player[]): number[] {
  const average = players.reduce((acc: number[], player) => {
    let total = 0;
    for (const point of player.points) {
      total += point;
    }
    acc.push(total / player.points.length);
    return acc;
  }, []);
  return average;
}

function aveRedMap(players: Player[]): number[] {
  const ave = players.map(
    (player) =>
      player.points.reduce((avePoint, current) => (avePoint += current), 0) /
      player.points.length
  );
  return ave;
}

// function averagePoints(players:Player[]):AveName[]{
//     const average = players.reduce((acc:AveName, current:Player)=>{
//        let total = 0;
//         for(const point of current.points){
//             total+= point;
//        }
//        acc = {[current.name]:(total /current.points.length)};

//        return acc;
//     },{})
//     return [average];
// }

type Person = { name: string; salary: number };
type Department = { [deptName: string]: Person[] | Department };
const company: Department = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ], //subdepartments
    internals: [{ name: "Jack", salary: 1300 }],
  },
};




//Displaying the name of employees
function printName(department: Department): void {
  if (Array.isArray(department)) {
    department.forEach((subDiv) => console.log(subDiv.name));
  } else {
    for (const subdep of Object.values(department)) {
      const subDepartment = subdep as Department;
      printName(subDepartment);
    }
  }
}
console.log(printName(company)); // John, Alice, Peter, Alex, Jack




//Putting the name of employees into an array
function getEmployeeName(department: Department): string[] {
  let employees:string[]=[];
  if (Array.isArray(department)) {
    return department.reduce((acc, current) => {
     acc.push(current.name);
     return acc; 
    },[]);
  } else {
    for (const subdep of Object.values(department)) {
      const subDepartment = subdep as Department;
      employees = employees.concat(getEmployeeName(subDepartment));
    }
  }
  return employees;
}
console.log(printName(company)); // [John, Alice, Peter, Alex, Jack]

// Write a function, flatten, that returns an array that has objects of the form {date: "...", id: 1, amt: 15} for all donations.
// flatten(dailyRecord) returns: [
// { date: '01/10/2022', id: 1, amount: 100 },
// { date: '01/10/2022', id: 2, amount: 10 },
// { date: '01/11/2022', id: 3, amount: 1 },
// { date: '01/11/2022', id: 2, amount: 5 },
// { date: '01/11/2022', id: 1, amount: 15 }
// ]

const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 2, amount: 5 };
const donation5 = { funderId: 1, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "01/10/2022" };
const day2 = {
  donations: [donation3, donation4, donation5],
  date: "01/11/2022",
};

const dailyRecord = [day1, day2];
type Donation = {
  funderId: number;

  amount: number;
};

type Dailydonation = {
  donations: Donation[];

  date: string;
};

type DailyAmount = {
  date: string;

  id: number;

  amount: number;
};

function flatten(dailyRecord: Dailydonation[]): DailyAmount[] {
  const allDailyDonation: DailyAmount[] = [];

  for (const day of dailyRecord) {
    for (const donation of day.donations) {
      let dailyDonation = {
        date: day.date,
        id: donation.funderId,
        amount: donation.amount,
      };

      allDailyDonation.push(dailyDonation);
    }
  }

  return allDailyDonation;
}

/**

*

* @param {Array of Objects} Array holding players stasts

* @returns {Array of Objects} returns an array of objects that holds the jersey number and the highest score

*

*/

type HighScore = {
  [key: string]: number;
};

type Stat = {
  game: number;

  points: number;
};

type Players = {
  jersey: number;

  stats: Stat[];
};

function findHighScores(teamStats: Players[]): HighScore[] {
  const highScore = teamStats.map((player) => {
    let max = -Infinity;
    for (const stat of player.stats) {
      if (stat.points > max) {
        max = stat.points;
      }
    }
    return { jersey: player.jersey, high: max };
  });
  return highScore;
}

const timer415 = function(num){
  for(let i = num; i >= 0; i--){
    console.log(i);
  }
}
setTimeout(timer415, 1000);

//3
type VariableABC ={
  [key:string]:number
}
// const abcs = [{a:1, b:2, c:3}, { a:2, b:2, c:21}, { a:5, b:2, c:3}]
//   console. 1og ("expect [6, 8, 30]:", mash (abcs))
function mesh(abcs:VariableABC[]):number[]{
  const mulABC = abcs.map(({a,b,c})=> a *b* c);
  return mulABC;
}

//4

function getSumbyId (dataArray: OuterobjectI[], id: number): number{
  const filtered = dataArray.filter(ele => ele.id === id);
  const total = filtered.reduce((acc, current)=> acc += current.value, 0);
  return total;
}

//6
function isPrime(num:number):boolean{
  for(let i= 2; i<=Math.sqrt(num); i++){
    if(num%i){
      return false;
    }
    
  }
  return true;
}

function getAllNames(dataArr){
  const allName = dataArr.reduce((acc, current)=>{
    for(const data of dataArr.data){
      acc.push(data);
      return acc;
    }
  },[])
  return allName;
}


function recursivePrime(num:number):void{
  if(isPrime(num)){
    console.log(num)
  }
  if(num>2){
    recursivePrime(num-1)
  }
}

//7
type Node={
  name: string, 
  value: string | null, 
  children: null | Node[]
}
function nodeWalker(node:Node):void{
  console.log(node.name);
  if(Array.isArray(node.children)){
    for(const child of node.children){
      nodeWalker(child);
    }
  }
}

//8
const array= [{name:"ram", age:29}, {name:"syam",age:40}, {name:"ganga", age:19}];

type Array1={
  name:string,
  age:number
}

function getAvgAge(arr:Array1[]):number{
  let avg=arr.reduce((acc,cur)=>{
    acc+=cur.age
  return acc},0)
  let result= (avg/arr.length)
  return (+result.toFixed(2))
}
console.log(getAvgAge(array));

// function findOld(arr:Array1[]):Array1{
//   let oldMan={} as Array1; 
//   arr.reduce((max,current)=>{
//     if(current.age > max){
//       max = current.age;
//       oldMan={name:current.name, age:max}
//     }
//     return max;
//   },-Infinity);
//   return oldMan;
// }


function findOld(arr:Array1[]):Array1 | undefined{
 
 const maxAge = arr.reduce((max,current)=>{
    if(current.age > max){
      max = current.age;
    }
    return max;
  },-Infinity);
  const oldAge = arr.find(person => person.age === maxAge)
  return oldAge;
}

//9
const printMe = ()=>{console.log("hello")}

//10
type ReduceCallback<T, U> = (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U;
export function myReduce<T, U>(arr: T[], func: ReduceCallback<T, U>, initialValue: U): U {
    let accumulator: U = initialValue;

    for (const currentValue of arr) {
        accumulator = func(accumulator, currentValue, arr.indexOf(currentValue), arr);
    }

    return accumulator;
}

//arr number[], acc number
function reduceFunc (initialValue:number, arr:number[], func:(acc:number, currentVal:number, index?:number, array?:number[])=>number):number{
  let accumulator = initialValue;
  for(const ele of arr){
    accumulator = func(accumulator, ele);
  }
  return accumulator;
}

//arr number[], return value number[];///********filter foreach */
function mapceFunc (arr:number[], func:(currentVal:number, index?:number, array?:number[])=>number):number[]{
  const newArr:number[] = []
  for(const ele of arr){
    newArr.push(func(ele));
  }
  return newArr;
}



//11
// interface Task {
//   taskId: number;
//   taskDescription: string;
//   priority: 'High' | 'Medium' | 'Low'; completed: boolean;
// }
//   interface TaskManager {
//   getIncompleteTasksCount (priority: 'High' | 'Medium' | 'Low'): number; 
//   totalIncompleteTasks (): number;
//   }
  
//   function myTask():TaskManager{
//     let tasks = [
//       { taskId: 1, taskDescription: 'Write a report', priority: 'High',
//       completed: false} ,
//       { taskId: 2, taskDescription: 'Attend a meeting', priority: 'Medium',
//       completed: true},
//       { taskId: 3, taskDescription: 'Code a new feature', priority: 'High',
//       completed: false}
//     ]
//     let taskObj:TaskManager = {
//       getIncompleteTasksCount (priority: 'High' | 'Medium' | 'Low'): number {
//         return tasks. reduce ( (count, task) => {
//         if (task.priority === priority && !task. completed) {
//         count++;
//       }, 0);
//         return count;
//       }
//       totalIncompleteTasks (): number {
//         return tasks. reduce (count, task) => {
//         if (!task. completed) {
//         count++；
//         }
//         return count;
//         }, 0);
//         },
//         };
//     }
//     return taskObj;
//   }

//12
function excuter(func:(num1:number, num2:number)=>number, num1:number, num2:number):number{
  const result = func(num1, num2);
  return result;
}
function sum (num1:number, num2:number):number{
  return num1 * num2;
}
console.log(excuter(sum, 1,3))


//13
const calculator = {
  operand1:0,
  operand2:0,
  setValues(operand1:number, operand2:number):void{
      calculator.operand1 = operand1;
      calculator.operand2 = operand2;
  },
  sum():number{
      return this.operand1 + this.operand2;
  },
  mul():number{
      return this.operand1 * this.operand2;
  }
};  


//15

function sortByLength(str:string):string{
  let arr = str.split(" ");
  arr.sort((a,b)=>a.length - b.length);
  const joinedStr = arr.join(" ");
  return joinedStr;
}