export const countConstruct = (target, wordBank) => {
  if (target === '') return 1;
  let count = 0;
  for (const word of wordBank) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      count += countConstruct(suffix, wordBank);
    }
  }
  return count;
};
