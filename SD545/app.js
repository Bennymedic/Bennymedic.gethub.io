// Instructions
// 1.Create a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.
function sum(arr){
    return arr.filter(ele=>ele>20).reduce((acc, current)=>{
        return acc + current;
    }, 0)
}
console.log(sum([1,22,33,4,5]))


// 2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.
const getNewArray = function(arr_str){
    return arr_str.filter(ele=>ele.length>5 && ele.includes('a'))
}
console.log(getNewArray(['arrrrr', 'str', 'char']))


// 3. Implement an arrow function with feature below:
const concat = (str, arr_num, arr_str)=>{
    return [...str.split(''),...arr_num, ...arr_str]
}

console.log(concat('hi', [1,2,3], ['Hello','world'])) //-> return result: ['h', 'i', 1,2,3, 'Hello','world']
