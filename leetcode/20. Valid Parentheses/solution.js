/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const closeMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const stack = [];
  for (const c of s) {
    if (c in closeMap) {
      if (stack.length == 0) {
        return false;
      }
      const openType = stack.pop();
      if (closeMap[c] !== openType) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length == 0;
};
