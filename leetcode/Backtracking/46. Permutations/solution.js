/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const isUsed = [...nums].fill(false);
  const result = [];
  backtracking(nums, result, isUsed, []);
  return result;
};

const backtracking = (nums, result, isUsed, state) => {
  // Goal
  if (state.length === nums.length) {
      result.push([...state]);
      return;
  }
  // Choice
  for (let i = 0; i < nums.length; i++) {
      // Constraint
      if (!isUsed[i]) {
          state.push(nums[i]);
          isUsed[i] = true;
          backtracking(nums, result, isUsed, state);
          isUsed[i] = false;
          state.pop();
      }
  }
}