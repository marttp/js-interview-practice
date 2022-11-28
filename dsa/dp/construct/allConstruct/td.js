export const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];
  const result = [];

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((s) => [word, ...s]);
      result.push(...targetWays);
    }
  }
  
  memo[target] = result;
  return result;
};

/**
  Time: O(n^m)
  Space: O(m)
*/
