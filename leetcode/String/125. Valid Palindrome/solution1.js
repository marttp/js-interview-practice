/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let txt = s.trim();
  if (!txt) return true;

  txt = [...txt.toLowerCase()].filter(isAlphanumeric);
  const txt2 = [...txt].reverse();

  return txt.join('') === txt2.join('');
};

const isAlphanumeric = (c) => {
  return /[A-Za-z0-9]/.test(c);
};
