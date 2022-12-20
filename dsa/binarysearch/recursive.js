const binarySearch = (nums, target) => {
  return binarySearchRecursive(nums, target, 0, nums.length - 1);
};

const binarySearchRecursive = (nums, target, left, right) => {
  const mid = left + Math.floor((right - left) / 2);
  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return binarySearchRecursive(nums, target, mid + 1, right);
  } else if (nums[mid] > target) {
    return binarySearchRecursive(nums, target, left, mid - 1);
  }
  return -1;
};
