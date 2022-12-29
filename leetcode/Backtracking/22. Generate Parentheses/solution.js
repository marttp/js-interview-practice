/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // n === 0 open = ?? close = ?? => close == 0
  // initial open = n && close = n
  // string
  // choice => "(" , ")"
  const result = [];
  backtracking(n, n, result, []);
  return result;
};

const backtracking = (open, close, result, state) => {
  // Goal
  if (close === 0) {
    result.push([...state].join(''));
    return;
  }
  // Constraint => "(" come before ")"
  // Choice - Open
  if (open !== 0) {
    state.push('(');
    backtracking(open - 1, close, result, state);
    state.pop();
  }
  // Choice - Close
  if (close > open) {
    state.push(')');
    backtracking(open, close - 1, result, state);
    state.pop();
  }
};
