export function sumDigits(int:number):number {
    let sum = 0;
    while (int > 0) {
      sum += int % 10;
      int = Math.floor(int / 10);
    }
    return sum;
  }