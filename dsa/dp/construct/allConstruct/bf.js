export const allConstruct = (target, wordBank) => {
  if (target === '') return [[]];
  const result = [];

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map((s) => [word, ...s]);
      result.push(...targetWays);
    }
  }

  return result;
};
