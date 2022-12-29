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
  if (remain < 0) {
    return;
  }
  if (remain === 0) {
    result.push([...state]);
    return;
  }
  // Choice
  for (let i = index; i < candidates.length; i++) {
    const n = candidates[i];
    state.push(n);
    // Constraint
    backtracking(candidates, i, result, remain - n, state);
    state.pop();
  }
};
