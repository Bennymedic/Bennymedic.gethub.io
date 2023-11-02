export function computeSalesCommission(
  isSaleried: boolean,
  sales: number
): number {
  const minSales = 300;
  const maxSales = 500;
  const minRate = 0.01;
  const midRate = 0.02;
  const maxRate = 0.03;
  let commision = null;
  if (sales < minSales) {
    commision = 0;
    return commision;
  }
  if (isSaleried) {
    if (sales < maxSales && sales >= minSales) {
      commision = sales * minRate;
    } else {
      commision = minRate * maxSales + (sales - maxSales) * midRate;
    }
  } else {
    if (sales <= maxSales && sales >= minSales) {
      commision = sales * midRate;
    } else {
      commision = midRate * maxSales + (sales - maxSales) * maxRate;
    }
  }
  return commision;
}

