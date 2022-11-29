/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  if (!nums || nums.length <= 1) {
    return false;
  }
  nums.sort();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  // n log(n) + n
  return false;
};
