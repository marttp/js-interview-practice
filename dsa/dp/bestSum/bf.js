export const bestSum = (target, numbers) => {
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombination = null;

  for (const num of numbers) {
    const remainder = target - num;
    const remainderCombination = bestSum(remainder, numbers);
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

  return shortestCombination;
};

/**
  Time: O(n^m * m)
  Space: O(m^2)
*/