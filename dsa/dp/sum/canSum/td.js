export const canSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  for (const num of numbers) {
    const remainder = target - num;
    if (canSum(remainder, numbers, memo)) {
      memo[target] = true;
      return true;
    }
  }
  return false;
};

/**
  Time: O(m * n)
  Space: O(m)
*/