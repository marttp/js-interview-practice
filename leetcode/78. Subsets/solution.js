/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  // index, result, initialState (prevState)
  backtracking(nums, 0, result, []);
  return result;
};

const backtracking = (nums, index, result, prevState) => {
  // Goal/Objective
  result.push([...prevState]);
  // Choice + Constraint
  for (let i = index; i < nums.length; i++) {
    const n = nums[i];
    prevState.push(n);
    backtracking(nums, i + 1, result, prevState);
    prevState.pop();
  }
};
