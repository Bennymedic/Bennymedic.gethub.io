function calcSum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
//Array methods
//map mehtod
const sample = [1,3,4,5,6];
const mapped = sample.map(num=> num*2);
// console.log(mapped)
// console.log(sample)
const objArr = [{name:'Alis', age:34}, {name:'Carl', age:43}]
const indexedNumber = objArr.map((person,index)=> person.name + index);
console.log(indexedNumber)
