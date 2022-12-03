/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let txt = s.trim();
  if (!txt) return true;

  txt = [...txt.toLowerCase()].filter(isAlphanumeric);

  let left = 0;
  let right = txt.length - 1;
  while (left <= right) {
    if (txt[left] !== txt[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
};

const isAlphanumeric = (c) => {
  return /[A-Za-z0-9]/.test(c);
};
