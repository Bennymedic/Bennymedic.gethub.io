//write any code you want to test here and run with npm run app
// import {makeArmy } from './closures.js';

import { stat } from "fs";

// const army = makeArmy();

//  army[0](); // the shooter number 0 shows 10
//   army[5](); // and number 5 also outputs 10...

//   type User = { name: string, age: number, surname: string, [key: string]: string | number };
//   let users:User[] = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];
//   users.sort(byField('name'));
// users.sort(byField('age'));

// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

function makeCounter(): (num: number) => number | string {
  let count = 0;

  return function (num: number): number | string {
    count += num;
    count +=1;
    let countWarn = "";
    if (num > 1) {
      countWarn = "Warning:  increment was by value greater than 1: " + count;
    }
    return countWarn;
  };
}
const myCount = makeCounter();


//The following objects record the season statistics for players on a basketball team.
const player1 = {jersey: 8, stats: [ {game : 1, points: 6}, {game : 2, points : 7} ] };
const player2 = {jersey: 12, stats: [ {game : 1, points: 16}, {game : 2, points : 14} ] };
const player3 = {jersey: 6, stats: [ {game : 1, points: 10}, {game : 2, points : 6} ] };
const teamStats = [player1, player2, player3];

//Write a function, findHighScores, that finds the high score in the season for each player as follows:
console.log("expect [{jersey: 8, high: 7}, {jersey: 12, high: 16}, {jersey: 6, high: 10}]: " , 
findHighScores(teamStats));

// Be sure to use meaningful variable names and write JSdoc comments 
// for findHighScores and any helper functions. 
// You can write this in VS Code and then paste your solution into Sakai.

/**
 * 
 * @param {Array of Objects} Array holding players stasts
 * @returns {Array of Objects} returns a an array of objects that holds the jersey number and the highest score
 * 
 */
type HighScore ={
    jersey:number,
    high:number
}
type Stat ={
    game: number,
    points: number
}
type Players ={
    jersey:number,
    stats:Stat[],
}
// function findHighScores(teamStats:Players[]):HighScore[]{
//     const seasonHighScore:HighScore[] = [];
//     for (const player of teamStats){
//         let highPoint = 0;
//         for(const stast of player.stats){
//             if (stast.points > highPoint){
//                 highPoint = stast.points;
//             }
//         }
//         let playerHighScore:HighScore = {jersey:player.jersey, high:highPoint};
//         seasonHighScore.push(playerHighScore);
//     }
//     return seasonHighScore;
// }

function findHighScores(teamStats:Players[]):HighScore[]{
    const seasonHighScore:HighScore = team
    for (const player of teamStats){
        let highPoint = 0;
        for(const stast of player.stats){
            if (stast.points > highPoint){
                highPoint = stast.points;
            }
        }
        let playerHighScore:HighScore = {jersey:player.jersey, high:highPoint};
        seasonHighScore.push(playerHighScore);
    }
    return seasonHighScore;
}