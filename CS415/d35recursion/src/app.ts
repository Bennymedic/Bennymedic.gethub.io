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

function averagePointsReduce(players:Player[]):number[]{
    const average = players.reduce((acc:number[], player)=>{
       let total = 0;
        for(const point of player.points){
            total+= point;
       }
       acc.push(total /player.points.length)
       return acc;
    },[])
    return average;
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
