/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  const n = nums.length;
  let maxSum = nums[0];
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};
