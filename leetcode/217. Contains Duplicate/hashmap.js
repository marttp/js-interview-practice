/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  if (!nums || nums.length <= 1) {
    return false;
  }
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashMap) {
      return true;
    }
    hashMap[nums[i]] = true;
  }
  return false;
};
