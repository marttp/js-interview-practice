/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = nums.map((n) => n * n);
  result.sort((a, b) => a - b);
  return result;
};
