/**
 *
 * @param {string} str
 * @returns {string}
 */
export function ucFirst(str: string): string {
  if (str === "") {
    return str;
  }
  let upperCased = str[0].toUpperCase() + str.slice(1, str.length);
  return upperCased;
}

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
export function checkSpam(str: string): boolean {
  str = str.toLowerCase();
  console.log(str);
  if (str.includes("xxxxx") || str.includes("viagra")) {
    return true;
  }
  return false;
}

/**
 *
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
export function truncate(str: string, maxlength: number): string {
  let truncated = "";
  if (str.length <= maxlength) {
    truncated = str;
  } else {
    truncated = str.slice(0, maxlength - 1) + "…";
  }
  console.log(truncated);
  return truncated;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
export function getMaxSubSum(arr: number[]): number {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}


export function camelize(str: string): string {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-") {
      i++;
      if (str[i]) {
        result += str[i].toUpperCase();
      }
    } else {
      result += str[i];
    }
  }

  return result;
}
export function extractCurrencyValue(str: string): number {
  const num = +str.slice(1);
  return num;
}
