export const howSum = (target, numbers) => {
  if (target === 0) return [];
  if (target < 0) return null;
  for (const num of numbers) {
    const remainder = target - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult) {
      return [...remainderResult, num];
    }
  }
  return null;
};

/**
  Time: O(n^m * n)
  Space: O(m)
*/