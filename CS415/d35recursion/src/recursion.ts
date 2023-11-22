export {
  sumTo,
  factorial,
  fibonacci,
  //   outputList,
  //   outputListLoop,
  //   reverseList,
  //   reverseListLoop,
  //   TreeNode,
  //   sumTreeValues,
};

function sumTo(n: number): number {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

function factorial(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function fibonacci(n: number): number {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Write a function, evenRecurse, that will use recursion to print all positive even numbers less than a given number and return sum, e.g.,
// evenRecurse(7) will log 6,4,2,0
function evenRecurse(num: number): number {
  if (num < 0) {
    return 0; 
  }
  if (num % 2 === 0) {
    console.log(num);
    return num + evenRecurse(num - 2);
  } else {
    return evenRecurse(num - 1);
  }
}

// type TreeNode = {
//   value: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
// };

// const obj = {a: 1, b: 2 }
// // function addObj({ a, b }: { a: number; b: number }): number {
// //  return a + b;
// // }
// type ObjABC ={
//      a: number,
//      b: number
// }
// function addObj(obj: ObjABC): number {
//  return obj.a + obj.b;
// }
// console.log(addObj(obj))
