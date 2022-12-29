/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums === null || nums.length === 0) {
    return [-1, -1];
  }
  const firstIndex = bsLeft(nums, target);
  if (firstIndex === -1) {
    return [-1, -1];
  }
  const lastIndex = bsRight(nums, target);
  return [firstIndex, lastIndex];
};

const bsLeft = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let index = -1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      index = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return index;
};

const bsRight = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let index = -1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      index = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return index;
};
