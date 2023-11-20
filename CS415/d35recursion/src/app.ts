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

