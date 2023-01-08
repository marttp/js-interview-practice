/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  let index = 0;
  // Cyclic Sort
  while (index < n) {
    const targetIndex = nums[index] - 1;
    if (nums[targetIndex] !== nums[index]) {
      [nums[targetIndex], nums[index]] = [nums[index], nums[targetIndex]];
    } else {
      index += 1;
    }
  }
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const target = i + 1;
    if (nums[i] !== target) {
      result.push(target);
    }
  }
  return result;
};
