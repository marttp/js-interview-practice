const twoSum = function (nums, target) {
  const indexMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in indexMap) {
      return [i, indexMap[nums[i]]];
    }
    const diff = target - nums[i];
    indexMap[diff] = i;
  }
  return [-1, -1];
};
