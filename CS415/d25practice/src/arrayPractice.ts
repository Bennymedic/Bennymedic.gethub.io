export type Person = {
  name: string;
  age: number;
};

export function doubleNums(arr: number[]): number[] {
  return arr.map((num) => num * 2);
}
type Property = {
  name: string;
  age: number;
};
export function doubleAges(arr: Property[]): Property[] {
  const result = arr.map((user) => {
    user.age = user.age * 2;
    return user;
  });
  return result;
}

export function filterEven(arr:number[]):number[] {
    const filterednum = arr.filter(num=>num %2 === 0);
    return filterednum;
}

export function filterOver10(arr:Property[]): Property[] {
    const filterednum = arr.filter(num=> num.age > 10);
    return filterednum;
}

export function findEvenNum(arr:number[]):number |undefined {
    const evenNum = arr.find(num=> num % 2 === 0);
    return evenNum;
}

export function findEvenAge(arr:Property[]):Property | undefined {
    const evenNum = arr.find(user=> user.age % 2 === 0)
    return evenNum;
}

export function includesEvenNum(arr:number[], num:number):boolean {
    if(arr.includes(num)) {
        return true
    }else {
        return false;

    }
}
// export function includesEvenAge(arr) {}
