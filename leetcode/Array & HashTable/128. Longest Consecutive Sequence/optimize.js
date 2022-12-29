/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  if (!nums || nums.length === 0) return 0;
  let longest = 1;
  const hashMap = {};
  nums.forEach((n) => {
    hashMap[n] = true;
  });

  for (const n of nums) {
    if (hashMap[n - 1]) continue;
    let currentStreak = 1;
    while (hashMap[n + currentStreak]) {
      currentStreak += 1;
    }
    longest = Math.max(longest, currentStreak);
  }

  return longest;
};
