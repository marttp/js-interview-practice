/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const doubleNums = [...nums, ...nums];
  const length = nums.length;
  const result = Array(nums.length).fill(-1);
  const stack = [];
  for (let i = 0; i < doubleNums.length; i++) {
    // Monotonic condition control
    while (stack.length !== 0 && doubleNums[i] > doubleNums[stack[stack.length - 1]]) {
      const index = stack.pop() % length;
      result[index] = doubleNums[i];
    }
    stack.push(i);
  }
  return result;
};
