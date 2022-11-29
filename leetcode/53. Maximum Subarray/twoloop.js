/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  const n = nums.length;
  let maxSum = nums[0];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};
