/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let allSum = Math.floor((n * (n + 1)) / 2);
  let actualSum = nums.reduce((a, b) => a + b, 0);
  return allSum - actualSum;
};
