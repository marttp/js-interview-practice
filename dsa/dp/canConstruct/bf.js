export const canConstruct = (target, wordBank) => {
  if (target === '') return true;
  for (const word of wordBank) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank)) {
        return true;
      }
    }
  }
  return false;
};
