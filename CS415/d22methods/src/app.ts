//write any code you want to test here and run with npm run app

/* write a function, sumPoints, to get the total points across all players */

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];



type Player = {
    name: string,
    points: number[]
}
function sumPoints(players:Player[]): number{
    let sum = 0;
    for (const player of players){
        for (const point of player.points){
        sum += point;
    }
    }
    
    return sum;
}
console.log("expect 10: ", sumPoints(players));

/* write a function findProps to return an array of all the properties in any given object */


type Object ={
    a:number,
    b:number,
    c:number
}
function findProps(obj:Object):string[]{
    let resultArr = []
    for (let key in obj){
        resultArr.push(key)
    }
    return resultArr
}
console.log("expect [a, b, c]: ", findProps({a: 1, b: 2, c: 3}));

const arr = [1, 5, 16, 3, 1, 108];
arr.forEach((num:number)=>{
    if (num % 2 === 0){
        console.log(num)
    }
})

function removeArr(arr:number[], num:number):number[]{
    const newArr = [...arr];
    newArr.splice(1,arr.length-2, num)
    return newArr;
}
const arrs = [1, 2, 3, 4, 5];
console.log(removeArr(arrs,999))

const result = removeArr(arrs, 999);
console.log("expect [1, 999, 5]: ", result);
const result2 = removeArr(arrs, 1234);
console.log("expect [1, 1234, 5]: ", result2);
console.log("expect [1, 2, 3, 4, 5]: ", arrs);


// use filter, find, and findIndex to find
// ➢
// all the even numbers
// ➢
// the first even number
// ➢
// the index of the first even number

const numbers = [1,5,18,2,77,108];

const evenNum = numbers.filter((num:number)=>num % 2 === 0);
console.log(evenNum)