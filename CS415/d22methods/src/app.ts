// //write any code you want to test here and run with npm run app

// /* write a function, sumPoints, to get the total points across all players */

// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];

// type Player = {
//     name: string,
//     points: number[]
// }
// function sumPoints(players:Player[]): number{
//     let sum = 0;
//     for (const player of players){
//         for (const point of player.points){
//         sum += point;
//     }
//     }

//     return sum;
// }
// console.log("expect 10: ", sumPoints(players));

// /* write a function findProps to return an array of all the properties in any given object */

// type Object ={
//     a:number,
//     b:number,
//     c:number
// }
// function findProps(obj:Object):string[]{
//     let resultArr = [];
//     for (let key in obj){
//         resultArr.push(key);
//     }
//     return resultArr;
// }
// console.log("expect [a, b, c]: ", findProps({a: 1, b: 2, c: 3}));

// const arr = [1, 5, 16, 3, 1, 108];
// const evenArr: number[] = [];
// type EvenObj ={
//     index:number
// }
// let evenObj ={}as EvenObj;
// arr.forEach((num:number, index:number)=>{
//     if (num % 2 === 0){
//         evenArr.push(index);
//         evenObj.index = num;
//     }
// })
// console.log(`This is even arr using forEach method ${evenArr}`)
// console.log(`This is even Obj using forEach method ${evenObj.index}`)

// function removeArr(arr:number[], num:number):number[]{
//     const newArr = [...arr];
//     newArr.splice(1,arr.length-2, num)
//     return newArr;
// // }
// // const arrs = [1, 2, 3, 4, 5];
// // console.log(removeArr(arrs,999))

// // const result = removeArr(arrs, 999);
// // console.log("expect [1, 999, 5]: ", result);
// // const result2 = removeArr(arrs, 1234);
// // console.log("expect [1, 1234, 5]: ", result2);
// // console.log("expect [1, 2, 3, 4, 5]: ", arrs);

// // // // use filter, find, and findIndex to find
// // // // ➢
// // // // all the even numbers
// // // // ➢
// // // // the first even number
// // // // ➢
// // // // the index of the first even number

// const numbers = [1,5,18,2,77,108];

// const evenNum = numbers.findIndex((num):boolean=>{
//    return num > 100 && num % 2 === 0;
// });
// console.log(evenNum, evenNum, numbers)

// const array123 = [1, 2, 3]
// const square = array123.map((num)=>num * num);
// console.log(square)

// //map method
// let lengths = ["Bilbo", "Gandalf", "Nazgul"];
// console.log(lengths); // [5,7,6]
// //modify so that it logs array with index: item.length instead of just item.length
// console.log("expect [0: 5, 1: 7, 2: 6]", lengths);

// let modifyLength = lengths.map((ele:string, index:number):string=> index + ": " + ele.length)
// console.log(modifyLength);

// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];
// // console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
// //console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints (players));

// type AveragePointsResult = {
//   [playerName: string]: number;
// };
// type User = {
//   name: string,
//   points: number[]
// }
// function averagePoints(player:User[]):AveragePointsResult[]{
//     let sum =0;
//     let ave:number = 0;
//     let result:AveragePointsResult[] = []
//     for(const ele of player){
//       let averages: AveragePointsResult = {};
//         sum = 0;
//         for (const value of ele.points){
//             sum += value;
//         }
//         ave = +((sum /ele.points.length).toFixed(1));
//         averages[ele.name] = ave;
//         result.push(averages);
//     }
//     return result;
// }
// console.log("Expect { Bob: 1.3333333333333333, Andre: 1, Max: 1 }:", averagePoints(players));
// Using a regular for...of loop
// function averagePoints(players: Player[]): AveragePointsResult {
//   const averages: AveragePointsResult = {};

//   for (const player of players) {
//     let totalPoints = 0;
//     for (const points of player.points) {
//       totalPoints += points;
//     }

//     const average = totalPoints / player.points.length;
//     averages[player.name] = average;
//   }

//   return averages;
// }

// Testing


//Exam questions

// type User = {
//   name: string;
//   points: number[];
// };

// const player1 = { name: "Bob", points: [1, 2, 1] };
// const player2 = { name: "Andre", points: [2, 0, 1] };
// const player3 = { name: "Max", points: [1, 1, 1] };
// const players = [player1, player2, player3];

// const result = players.map((player: User): number => {
//   let points = player.points;
//   let sum = 0;
//   points.forEach((num) => {
//     sum += num;
//   });
//   let ave = sum / points.length;
//   ave.toFixed(2);
//   return ave;
// });
// console.log("expect [1.33, 1, 1 ]: ", result);

// //2
// const array123 = [1, 2, 3];
// const squared = array123.map((num: number): number => num * num);
// console.log(squared);

// //3
// // const ask = (question: string, yes: ()=>void, no: ()=>void): void =>{
// //     if (prompt(question) === "yes") yes()
// //     else no();
// //     }

// //4
// function executor(
//   func: (num1: number, num2: number) => number,
//   num1: number,
//   num2: number
// ): number {
//   return func(num1, num2);
// }
// console.log((executor(add, 5, 10), 15));
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

// //1

// type Unit = {
//   isDegrees: boolean;
//   convertTodegree: (num: number) => number;
//   converToradius: (num: number) => number;
// };
// const unitConversion: Unit = {
//   isDegrees: false,
//   converToradius(num: number): number {
//     return (num * Math.PI) / 180;
//   },
//   convertTodegree(num: number): number {
//     return (num * 180) / Math.PI;
//   },
// };
// console.log(unitConversion.converToradius(10));

// //11

// const donation1 = { funderId: 1, amount: 100 };
// const donation2 = { funderId: 2, amount: 10 };
// const donation3 = { funderId: 3, amount: 1 };
// const donation4 = { funderId: 4, amount: 5 };
// const donation5 = { funderId: 5, amount: 15 };
// const day1 = { donations: [donation1, donation2], date: "01/10/2022" };
// const day2 = {
//   donations: [donation3, donation4, donation5],
//   date: "01/11/2022",
// };

// const dailyRecord = [day1, day2];

// type Donation = {
//   funderId: number;
//   amount: number;
// };
// type Dailydonation = {
//   donations: Donation[];
//   date: string;
// };

// //11/a
// function dailyTotal(dailyRecord: Donation[]): number {
//   let dailyTotal = 0;
//   for (const donation of dailyRecord) {
//     dailyTotal += donation.amount;
//   }
//   return dailyTotal;
// }
// console.log("expect 21: ", dailyTotal(day2.donations));

// //11d. 


// //11.c
// function totalDonations(dailyRecord: Dailydonation[]): number {
//   let totalAmount = 0;
//   for (const day of dailyRecord) {
//     for (const donation of day.donations) {
//       totalAmount += donation.amount;
//     }
//   }
//   return totalAmount;
// }
// console.log("expect 131: ", totalDonations(dailyRecord));

// //11e

// type DateMax ={
//     day:string,
//     amount:number
// }
// function findBigDonations (dailyRecord:Dailydonation[], dailygoal:number): DateMax[]{
//     let result:DateMax[] =[];
//     for (const day of dailyRecord){
//         let date = day.date;
//         for(const donation of day.donations){
//             if(donation.amount >dailygoal){
//                 let maxAmount:DateMax ={day:date, amount:donation.amount};
//                 result.push(maxAmount);
//             }
//         }
//     }
//     return result;
// }
// console.log(`expect [{day: "01/10/2022", amount: 100 },
//       {day: "01/11/2022", amount: 15 } :  `, findBigDonations(dailyRecord, 80) );

// //11f.
// function averageDonation (dailyRecord:Dailydonation):number{
//     let average = dailyTotal(dailyRecord.donations) / dailyRecord.donations.length;
//     return average;
// }
// console.log("expect 55: ", averageDonation(day1));

// //Methods
// // 11. Get average age, round the result to keep only two decimals.

// // 12. Find the oldest man

// type Person={
//     name:string,
//     age:number
//   }
//   function findOldestMan(arr:Person[]):Person{
    
//     let oldest = 0;
//     let nameOld:string ='';
//     for (const person of arr){
//       if (person.age > oldest){
//        oldest = person.age;
//        nameOld = person.name; 
//       }
//     }
//     let result:Person = {name:nameOld, age:oldest};
//     return result;
//   }
//   let arr= [{name:"ram",age:29}, {name:"syam",age:40}, {name:"ganga",age:19}];
//   // console.log('expect 75.33',getAverageAge(array));
//   console.log('expect {name:"syam",age:40}',findOldestMan(arr));

  // let ladder = {
  //   step: 0,
  //   up() {
  //     this.step++;
  //     return this;
  //   },
  //   down() {
  //     this.step--;
  //     return this;
  //   },
  //   showStep() {
  //     alert( this.step );
  //     return this;
  //   }
  // };
  
  // ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0


//   const numbers : { [key: string]: number } = {
//     one: 1,
//     two: 22,
//     three: 333,
//     four: 444
//     }
//     const propertyOrder = ["one", "two", "three"];
//     for (const property of propertyOrder){
//       if(property in numbers){
//         console.log(numbers[property])
//       }
//     }
// let newArr = propertyOrder.slice();
// console.log(newArr)

// //  const result = replaceInterior(arr, 999);
// function replaceInterior(arr:number[], first:number, last:number):number[]{
//   const newArr = arr.slice();
//   newArr.splice(0, 1, first);
//   newArr.splice(newArr.length-1, 1, last)
//   return newArr;
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(replaceInterior(arr, 0, 888))

// //4

// // function firstLast(arr:string[]):Name[]{
// //   const result:Name[] = [];
// //   for(const name of arr){
// //     let splitted = name.split(' ');
// //     let fn = splitted[0];
// //     let ln = splitted[1];
// //     let nameObj: Name = {firstName: fn, lastName: ln};
// //     result.push(nameObj);
// //   }
// //   return result;
// // }

// //4
// type Name ={
//   firstName: string,
//   lastName: string
// }
// function firstLast(arr:string[]):Name[]{
//   const result = arr.map(name => {
//    let nameObj: Name = {firstName: name.split(' ')[0], lastName: name.split(' ')[1]};
//    return nameObj;
//   }) 
  
//   return result;
// }
// const names = ['Menge Smith', 'Wengel Negewo', 'Tedy Beni']
// console.log(firstLast(names))

// //5
// function replaceInterior(arr:number[], first:number, last:number):number[]{
//   const newArr = arr.slice();
//   newArr.splice(0, 1, first);
//   newArr.splice(newArr.length-1, 1, last)
//   return newArr;
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(replaceInterior(arr, 0, 888))

// //6
// function squares(num:number):number{
//   return num * num;
// }
// function cubes(num:number):number{
//   return num * num * num;
// }
// function foo(callback: (num:number)=>number, inputNum:number):number{
//   return callback(inputNum);
// }
// console.log(foo(squares, 5))
// console.log(foo(cubes, 5))

// // //7
// type Session= {
//   userId:number,
//   duration:number
 
// }
// type Day= {
//   date:string
//   sessions:Session[]
// }
// const session1 = { userId: 1, duration: 60 };
// const session2 = { userId: 2, duration: 45 };
// const session3 = { userId: 2, duration: 30 };
// const session4 = { userId: 3, duration: 15 };
// const session5 = { userId: 3, duration: 75 };
// const day1 = { sessions: [session1, session2], date: "01/10/2022" };
// const day2 = { sessions: [session3, session4, session5], date: "01/10/2022" };
// const dailyRecord = [day1, day2];
 
// //7b
// function calculateDailyTotalDuration(sessions:Session[]):number{
//   let sum=0;
//   for (const session of sessions){
//     sum+=session.duration;
 
//   }
// return sum;
// }

// //7c
// function calculateTotalDuration(dailyRecord:Day[]):number{
//   let total=0;
//   for(const day of dailyRecord){
//     total+=calculateDailyTotalDuration(day.sessions)
//   }
//   return total;
// }



// //7d
// function getAllSessions(dailyRecord:Day[]):Session[]{
//   let allSessions:Session[]=[];
//   for(const days of dailyRecord){
//     console.log(days.sessions)
//     allSessions=allSessions.concat(days.sessions)
//   }
//   return allSessions;
 
// }
// console.log(getAllSessions(dailyRecord))
 
// // //7e
// function getAllSessionsForUser(dailyRecord:Day[],userId:number):Session[]{
//   const allSessions= getAllSessions(dailyRecord);
//   const filtered=allSessions.filter(session=>session.userId===userId)
//   return filtered;
// }
 

// // //7f
// function getAllDurations(dailyRecord:Day[]):number[]{
//   const allSessions=getAllSessions(dailyRecord);
//   const allDuration=allSessions.map(session=>session.duration);
//   return allDuration;
// }

// const newArr = array123.map(num=> num *2);
// let array1234 = [1,2,3]
// const newArrr = array1234.reduce((sum,current)=> sum + current, 0);
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];

// console.log("expect 4:",  maxPoints(players));
// type Player = {
//   name:string,
//   points:number[]
// }
// function maxPoints(player:Player):number{
//   let total = 0;
//   for(const point of player.points){
//     total += point;
//   }
//   return total;
// }
//Use reduce to find the sum of an array.
// Use reduce to find the largest element of an array.
// [you may run out of time for these in the quiz, but they will be good 
//   practice later for the exam. Note that there are 0 points in this quiz for this question.]
//  arr = [1,3,5];
// const sumArr = arr.reduce((sum,current)=> sum + current, 0);
// const largerArr = arr.reduce((acc, current)=> {
//   if (acc < current){
//     acc = current;
//   }
//   return acc;
// }, -Infinity);

// const [bob, jim, carl] = ["BoB", "Jim", "Carl"]
// console.log(bob, jim, carl)
// let str = ["BoB", "Jim", "Carl"];

// //join string
// let joinedStr = str.reduce((acc, current)=>{
//     acc += current;
//     return acc;
// },'');

// //reverse string
// let reversedStr = str.reduce((acc, current)=>{
//   acc = current + acc;              //acc = BoB + '',   acc = Jim + BoB,  acc = carl + Jim + BoB
//   return acc;
// },'');


// //length of array in array
// let lengthArr = str.reduce((acc:number[], current)=>{
//   acc = acc.concat(current.length);              
//   return acc;
// },[]);

// //expected output : "BoBJimCarl"
// let outputstr = [];
// for (let chr of str){
//   outputstr.push(chr);
// }

// //Write a function, flatten, that returns an array that has objects of the form {date: "...", id: 1, amt: 15} for all donations.
// flatten(dailyRecord) returns: [
// { date: '01/10/2022', id: 1, amount: 100 },
// { date: '01/10/2022', id: 2, amount: 10 },
// { date: '01/11/2022', id: 3, amount: 1 },
// { date: '01/11/2022', id: 2, amount: 5 },
// { date: '01/11/2022', id: 1, amount: 15 }
// ]

// const donation1 = { funderId: 1, amount: 100 };
// const donation2 = { funderId: 2, amount: 10 };
// const donation3 = { funderId: 3, amount: 1 };
// const donation4 = { funderId: 2, amount: 5 };
// const donation5 = { funderId: 1, amount: 15 };
// const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
// const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

// const dailyRecord = [day1, day2];


// type Donation = {
//   funderId: number;
//   amount: number;
// };
// type Dailydonation = {
//   donations: Donation[];
//   date: string;
// };
// type DailyAmount ={
//   date: string,
//   id: number,
//   amount:number

// }
// function flatten(dailyRecord:Dailydonation[]):DailyAmount[]{
//   const allDailyDonation:DailyAmount[]= []
//   for (const day of dailyRecord){
//     for(const donation of day.donations){
//       let dailyDonation = { date: day.date, id: donation.funderId, amount: donation.amount };
//       allDailyDonation.push(dailyDonation)
//     }   
    
//   }
//   return allDailyDonation;
// }

// //myMap(arr, fun) 

// function myMap(arr:number[], func:(num:number)=>number):number[]{
//   let newArr = [];
//   for (const ele of arr){
//     let updatedEl = func(ele);
//     newArr.push(updatedEl)
//   }
//   return newArr
// }

// function squareaa(num:number):number{
//   return num* num;
// }

// myMap([1,2,3])

// function sum (a:number):(b:number)=>number{
//   return function (b){
//     return a + b;
//   }
// }

// type Num ={
//   x:number,
//   y:number
// }

// function smash(arr:Num[]):number[]{
//   const result = arr.map(({x, y})=> {
//     return x + y;
//   });
// return result;
// }

// const bar = [{x:1, y:2}, {x:10, y:4}, {x:4, y:2}]
// console.log("expect [3, 14, 6]:", smash(bar));
// function findMax() {
//   let max = -Infinity;
//   for (const num of arguments) {
//   if (num > max) {
//   max = num;
//   }
//   }
//   return max;
//   }
//   const max1 = findMax(1, 123, 500, 115, 66, 88);
//   const max2 = findMax(3, 6, 8); 

// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [ john, pete];

// // Use the map function to map the people array to the following:
// [{ fullName: "John Smith", age: 10 },
// { fullName: "Pete Hunt", age: 20 },]
// type People ={
//   name:string,
//   surname: string,
//   age:number
// }
// type Person ={
//   fullName: string,
//   age:number
// }
// function concatName(people:People[]):Person[]{
//   const concatedName = people.map(person=>{
//     let personObj:Person = {fullName: person.name + ' ' + person.surname, age: person.age}
//     return personObj;
//   })
//   return concatedName;
// }
// function concatName(people:People[]):Person[]{
//   const concatedName = people.map(({ name, surname, age})=>{
//     let personObj:Person = {fullName: name + ' ' + surname, age: age}
//     return personObj;
//   })
//   return concatedName;
// }

function factorial(num:number):number{
  if(num===1){
    return 1;
  }
  return num * factorial(num-1);
}

function countInstances(str:string, chr:string):number{
  let count =0;
  if(chr === ''){
    return 0
  }
  else if(chr === str[0]){
    return count + countInstances(str.slice(1), chr);
  }else{
    return countInstances(str.slice(1), chr)
  }
}


type Person = { name: string; salary: number;}
//index signature since do not know names of properties ahead of time
//Department is an object with an unknwon number and name of properties that are strings and values
//that are Person[] or Department objects
type Department = { [ deptName: string]: Person[] | Department};
const company: Department = {
 sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
 development: {
 sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }], //subdepartments
 internals: [{name: 'Jack', salary: 1300}]
 }
 };

function sumSalaries(department:Department):number{
  if(Array.isArray(department)){
    retrun department.reduce(acc, current=>acc += current.salary,0)
  }else{
    let sum = 0;
    for(const subdep of Object.values(department)){
      sum += 
    }
  }
}