export const canSum = (target, numbers) => {
  const table = Array(target + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target; i++) {
    if (table[i]) {
      for (const num of numbers) {
        table[i + num] = true;
      }
    }
  }

  return table[target];
};
