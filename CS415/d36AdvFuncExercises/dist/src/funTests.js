export function myMap(arr, func) {
    const newArr = [];
    for (const currentValue of arr) {
        newArr.push(func(currentValue, arr.indexOf(currentValue), arr));
    }
    return newArr;
}
export function myFilter(arr, func) {
    let filteredEl = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            filteredEl.push(arr[i]);
        }
    }
    return filteredEl;
}
export function myReduce(array, func, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = func(accumulator, array[i], i, array);
    }
    return accumulator;
}
