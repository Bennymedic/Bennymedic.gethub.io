
export function multDigits(int:number):number {
  let mult = 1;
  while (int > 0) {
    mult *= int % 10;
    int = Math.floor(int / 10);
  }
  return mult;
}
