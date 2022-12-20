/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const result = [-1, -1];
  if (nums === null || nums.length === 0) {
    return result;
  }
  result[0] = bsWithFlag(nums, target, true);
  if (result[0] !== -1) {
    result[1] = bsWithFlag(nums, target, false);
  }
  return result;
};

const bsWithFlag = (nums, target, isFindFirst) => {
  let left = 0;
  let right = nums.length - 1;
  let index = -1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      index = mid;
      if (isFindFirst) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return index;
};
