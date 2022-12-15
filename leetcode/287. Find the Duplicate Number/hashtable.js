/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const table = {};
  for (const n of nums) {
    if (n in table) return n;
    table[n] = n;
  }
  return -1;
};
