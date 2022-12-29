/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
      return [];
  }
  const buttons = [
      "", // 0
      "", "abc", "def", // 1-3
      "ghi", "jkl", "mno", // 4-6
      "pqrs", "tuv", "wxyz"// 7-9
  ];
  const result = [];
  backtracking(digits, buttons, 0, result, []);
  return result;
};

const backtracking = (digits, buttons, index, result, state) => {
  // Goal
  if (index === digits.length) {
    result.push([...state].join(''));
    return;
  }
  // Constraint
  const digit = digits[index];
  const str = buttons[digit];
  // Choice
  for (const c of str) {
    state.push(c);
    backtracking(digits, buttons, index + 1, result, state);
    state.pop();
  }
};