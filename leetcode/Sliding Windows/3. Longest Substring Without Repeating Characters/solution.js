/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s || s.length == 0) {
    return 0;
  }
  let windowStart = 0;
  let windowEnd = 0;
  let longest = 0;
  const set = new Set();

  while (windowEnd < s.length) {
    const cEnd = s[windowEnd];
    while (set.has(cEnd)) {
      const cStart = s[windowStart];
      set.delete(cStart);
      windowStart += 1;
    }
    set.add(cEnd);
    longest = Math.max(longest, windowEnd - windowStart + 1);
    windowEnd += 1;
  }

  return longest;
};
