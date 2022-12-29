/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const table = nums2.reduce((d, n) => ({ ...d, [n]: -1 }), {});
  for (let i = 0; i < nums2.length; i++) {
    // Monotonic stack logic
    while (stack.length !== 0 && nums2[i] > nums2[stack[stack.length - 1]]) {
      const index = stack.pop();
      const pastValue = nums2[index];
      table[pastValue] = nums2[i];
    }
    stack.push(i);
  }
  return nums1.map((n) => table[n]);
};
