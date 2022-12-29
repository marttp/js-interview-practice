/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let readIndex = 0;
  let writeIndex = 0;
  // Move number to position
  while (readIndex < nums.length) {
    if (nums[readIndex] !== 0) {
      nums[writeIndex] = nums[readIndex];
      writeIndex += 1;
    }
    readIndex += 1;
  }
  // Fulfill 0
  while (writeIndex < nums.length) {
    nums[writeIndex] = 0;
    writeIndex += 1;
  }
};
