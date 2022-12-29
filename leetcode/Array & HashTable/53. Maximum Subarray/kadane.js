/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  const n = nums.length;
  let maxSumSoFar = nums[0];
  let maxSumEndingHere = nums[0];
  for (let i = 1; i < n; i++) {
    maxSumEndingHere = Math.max(maxSumEndingHere + nums[i], nums[i]);
    maxSumSoFar = Math.max(maxSumSoFar, maxSumEndingHere);
  }
  return maxSumSoFar;
};
