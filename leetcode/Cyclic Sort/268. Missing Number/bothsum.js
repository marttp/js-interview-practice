/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let allSum = 0;
  const n = nums.length;
  for (let i = 0; i <= n; i++) {
    allSum += i;
  }
  let actualSum = nums.reduce((a, b) => a + b, 0);
  return allSum - actualSum;
};
