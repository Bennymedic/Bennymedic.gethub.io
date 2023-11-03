function getMaxSubSum(arr:number[]):number{
    let sum:number = arr[0];
    for (let i =0; i< arr.length; i++){
        if(arr[i] > sum){
            sum = arr[i];
        }
        for (let j =i+1; j< arr.length; j++){
            if((arr[i] + arr[j]) > sum ){
                sum = arr[i] + arr[j];
            }
        }
    }
    return sum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]))
const elements = ["I", "m", "n"]
function printArr(arr:string[]):number{
let count =0;
for(let i= 0; i< arr.length; i++){
console.log(arr[i]);
count++;
}
return count;
}
printArr(elements)
//getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)

// function cube(num: number): number { return num * num * num; };

// console.log("expect 0: ", cube(0));

// console.log("expect -1000: ", cube(-10));

// //write a Mocha test to replace the console.log statements.  Assume it is in the same file as the code.

// describe("test cube ", function(){

// it("expect 0:", function () {

// assert.strictEqual(cube(0), 0);

// });

// it("expect -1000:", function () {

// assert.strictEqual(cube(-10), -1000);

// });

// })