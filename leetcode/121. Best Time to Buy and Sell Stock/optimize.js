const maxProfit = function (prices) {
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (const p of prices) {
    const profit = p - min;
    max = Math.max(max, profit);
    min = Math.min(min, p);
  }
  return max;
};
