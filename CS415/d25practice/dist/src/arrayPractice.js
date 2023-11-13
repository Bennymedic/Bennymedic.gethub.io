export function doubleNums(arr) {
    return arr.map((num) => num * 2);
}
export function doubleAges(arr) {
    const result = arr.map((user) => {
        user.age = user.age * 2;
        return user;
    });
    return result;
}
export function filterEven(arr) {
    const filterednum = arr.filter(num => num % 2 === 0);
    return filterednum;
}
export function filterOver10(arr) {
    const filterednum = arr.filter(num => num.age > 10);
    return filterednum;
}
export function findEvenNum(arr) {
    const evenNum = arr.find(num => num % 2 === 0);
    return evenNum;
}
export function findEvenAge(arr) {
    const evenNum = arr.find(user => user.age % 2 === 0);
    return evenNum;
}
export function includesEvenNum(arr, num) {
    if (arr.includes(num)) {
        return true;
    }
    else {
        return false;
    }
}
// export function includesEvenAge(arr) {}
