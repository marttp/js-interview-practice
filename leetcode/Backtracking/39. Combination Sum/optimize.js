/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // result, initialState, target
  const result = [];
  backtracking(candidates, 0, result, target, []);
  return result;
};

const backtracking = (candidates, index, result, remain, state) => {
  // Goal
  if (index === candidates.length) {
    return;
  }
  if (remain === 0) {
    result.push([...state]);
    return;
  }
  // Choice
  for (let i = index; i < candidates.length; i++) {
    const n = candidates[i];
    // Move computation check before push to function call stack instead
    if (remain - n < 0) {
      continue;
    }
    state.push(n);
    // Constraint
    backtracking(candidates, i, result, remain - n, state);
    state.pop();
  }
};
