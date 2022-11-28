export const bestSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombination = null;

  for (const num of numbers) {
    const remainder = target - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination) {
      const combination = [...remainderCombination, num];
      if (
        !shortestCombination ||
        shortestCombination.length > combination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[target] = shortestCombination;
  return memo[target];
};


/**
  Time: O(m^2 * n)
  Space: O(m^2 * n)
*/