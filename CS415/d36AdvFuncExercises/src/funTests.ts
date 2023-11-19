/**
 *
 * @param {Array} arr
 * @param {Function} func
 * @returns {Array} returns a new element after the application of the function
 */
type MapFunc<T, U> = (currentValue: T, Index?: number, array?: T[]) => U;
export function myMap<T, U>(arr: T[], func: MapFunc<T, U>): U[] {
  const newArr: U[] = [];
  for (const currentValue of arr) {
    newArr.push(func(currentValue, arr.indexOf(currentValue), arr));
  }
  return newArr;
}

/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
type FilterFunc<T> = (currentValue: T, Index?: number, array?: T[]) => boolean;

export function myFilter<T>(
  arr: T[],
  func:FilterFunc<T>
): T[]{
  let filteredEl:T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i],i, arr)) {
      filteredEl.push(arr[i]);
    }
  }
  return filteredEl;
}


/**
 *
 * @param {*} arr
 * @param {*} func
 * @param {*} initialValue
 * @returns
 */
type ReduceCallback<T, U> = (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U;
export function myReduce<T, U>(array: T[], func: ReduceCallback<T, U>, initialValue: U): U {
    let accumulator: U = initialValue;

    for (let i = 0; i < array.length; i++) {
        accumulator = func(accumulator, array[i], i, array);
    }

    return accumulator;
}
