/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  if (!nums || nums.length === 0) return 0;
  let longest = 1;
  let currentStreak = 1;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1];
    const current = nums[i];
    if (prev != current) {
      if (prev == current - 1) {
        currentStreak += 1;
      } else {
        longest = Math.max(longest, currentStreak);
        currentStreak = 1;
      }
    }
  }
  return Math.max(longest, currentStreak);
};
