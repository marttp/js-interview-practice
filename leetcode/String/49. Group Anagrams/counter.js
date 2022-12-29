/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const dict = {};
  for (const word of strs) {
    const counter = Array(26).fill(0);
    for (const c of word) {
      counter[c.codePointAt(0) - 'a'.codePointAt(0)] += 1;
    }
    const key = counter.join('#');
    if (!dict[key]) {
      dict[key] = [];
    }
    dict[key].push(word);
  }
  return Object.values(dict);
};
