// canSum - Decision Problem

export const canSum = (target, numbers) => {
  if (target === 0) return true;
  if (target < 0) return false;
  for (const num of numbers) {
    const remainder = target - num;
    if (canSum(remainder, numbers)) {
      return true;
    }
  }
  return false;
};
