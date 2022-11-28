export const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;
  let count = 0;
  for (const word of wordBank) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      count += countConstruct(suffix, wordBank, memo);
    }
  }
  memo[target] = count;
  return memo[target];
};

/**
  Time: O(n * m^2)
  Space: O(m^2)
*/
