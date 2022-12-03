/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLength = Number.MAX_SAFE_INTEGER;
  let start = 0;
  let end = 0;
  let sum = 0;
  while (end < nums.length) {
    const numEnd = nums[end];
    sum += numEnd;
    while (start <= end && sum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      const numStart = nums[start];
      sum -= numStart;
      start += 1;
    }
    end += 1;
  }
  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
};
