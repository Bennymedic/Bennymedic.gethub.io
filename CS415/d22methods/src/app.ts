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
// }
// const arrs = [1, 2, 3, 4, 5];
// console.log(removeArr(arrs,999))

// const result = removeArr(arrs, 999);
// console.log("expect [1, 999, 5]: ", result);
// const result2 = removeArr(arrs, 1234);
// console.log("expect [1, 1234, 5]: ", result2);
// console.log("expect [1, 2, 3, 4, 5]: ", arrs);

// // // use filter, find, and findIndex to find
// // // ➢
// // // all the even numbers
// // // ➢
// // // the first even number
// // // ➢
// // // the index of the first even number

const numbers = [1,5,18,2,77,108];

const evenNum = numbers.findIndex((num):boolean=>{
   return num > 100 && num % 2 === 0;
});
console.log(evenNum, evenNum, numbers)

const array123 = [1, 2, 3]
const square = array123.map((num)=>num * num);
console.log(square)

//map method
let lengths = ["Bilbo", "Gandalf", "Nazgul"];
console.log(lengths); // [5,7,6]
//modify so that it logs array with index: item.length instead of just item.length
console.log("expect [0: 5, 1: 7, 2: 6]", lengths);

let modifyLength = lengths.map((ele:string, index:number):string=> index + ": " + ele.length)
console.log(modifyLength);

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];
// console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
//console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints (players));

type AveragePointsResult = {
  [playerName: string]: number;
};
type User = {
  name: string,
  points: number[]
}
function averagePoints(player:User[]):AveragePointsResult[]{
    let sum =0;
    let ave:number = 0;
    let result:AveragePointsResult[] = []
    for(const ele of player){
      let averages: AveragePointsResult = {};
        sum = 0;
        for (const value of ele.points){
            sum += value;
        }
        ave = +((sum /ele.points.length).toFixed(1));
        averages[ele.name] = ave;
        result.push(averages);
    }
    return result;
}
console.log("Expect { Bob: 1.3333333333333333, Andre: 1, Max: 1 }:", averagePoints(players));
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