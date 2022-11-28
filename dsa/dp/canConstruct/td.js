export const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (const word of wordBank) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return memo[target];
      }
    }
  }

  memo[target] = false;
  return memo[target];
};

/**
  Time: O(n * m^2)
  Space: O(m^2)
*/
