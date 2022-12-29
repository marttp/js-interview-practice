/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const txt = s.split(' ');
  return txt.map((t) => [...t].reverse().join('')).join(' ');
};
