
export function calcDownpayment(cost: number): number {
  let downPayment = null;
  const payment0 = 0;
  const payment50k = 50000;
  const payment100k = 100000;
  const payment200k = 200000;
  const minRate = 0.05;
  const midRate = 0.1;
  const maxRate = 0.15;
  const firstPayment = 2500;
  const secondPayment = 7500;
  const thirdPayment = 20000;
  if (cost > payment0 && cost < payment50k) {
    downPayment = minRate * cost;
  } else if (cost >= payment50k && cost < payment100k) {
    downPayment = firstPayment + midRate * (cost - payment50k);
  } else if (cost >= payment100k && cost < payment200k) {
    downPayment = secondPayment + maxRate * (cost - payment100k);
  } else {
    downPayment = thirdPayment + midRate * (cost - payment200k);
  }
  return downPayment;
}


