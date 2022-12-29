const maxProfit = function (prices) {
  let max = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      const profit = prices[i] - prices[j];
      max = Math.max(max, profit);
    }
  }
  return max;
};
