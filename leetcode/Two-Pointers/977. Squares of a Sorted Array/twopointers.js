/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  const result = Array(n).fill(0);
  let writeIndex = n - 1;
  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];
    if (leftSquare > rightSquare) {
      result[writeIndex] = leftSquare;
      left += 1;
    } else {
      result[writeIndex] = rightSquare;
      right -= 1;
    }
    writeIndex -= 1;
  }
  return result;
};
