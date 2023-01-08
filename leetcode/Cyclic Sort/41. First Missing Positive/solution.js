/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // possible value = negative, zero, *positive (1 - (2^31 - 1))
  // Example 1: [-1] -> 1
  // Possible value for limitation -> nums.length
  // if full array from 1 - n => n + 1 result

  const n = nums.length;
  let index = 0;
  // Cyclic Sort
  while (index < n) {
    const targetIndex = nums[index] - 1;
    const isValidRange = targetIndex >= 0 && targetIndex < n;
    if (isValidRange && nums[index] !== nums[targetIndex]) {
      [nums[index], nums[targetIndex]] = [nums[targetIndex], nums[index]];
    } else {
      index += 1;
    }
  }
  // Finding smallest
  for (let i = 0; i < n; i++) {
    const positiveValue = i + 1;
    if (nums[i] !== positiveValue) {
      return positiveValue;
    }
  }
  return n + 1;
};
