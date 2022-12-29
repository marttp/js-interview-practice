/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  let ptr = nums[0];
  while (slow !== ptr) {
    slow = nums[slow];
    ptr = nums[ptr];
  }
  return ptr;
};
