export const howSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  for (const num of numbers) {
    const remainder = target - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult) {
      memo[target] = [...remainderResult, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return memo[target];
};

/**
  Time: O(m^2 * n)
  Space: O(m^2)
*/