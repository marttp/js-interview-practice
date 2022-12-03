/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const charMap = {};
  for (const c of s) {
    if (!charMap[c]) charMap[c] = 0;
    charMap[c] += 1;
  }
  for (const c of t) {
    if (!charMap[c]) return false;
    charMap[c] -= 1;
  }
  return true;
};
