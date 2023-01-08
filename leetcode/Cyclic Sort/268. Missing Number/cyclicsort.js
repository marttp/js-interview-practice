/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let i = 0;
  while (i < n) {
    const target = nums[i];
    const isValidRange = target >= 0 && target < n;
    if (i !== target && isValidRange) {
      [nums[i], nums[target]] = [nums[target], nums[i]];
    } else {
      i += 1;
    }
  }
  // Scan missing
  for (let i = 0; i < n; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }
  return n;
};
