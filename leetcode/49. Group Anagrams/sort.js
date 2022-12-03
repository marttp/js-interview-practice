/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const dict = {};
  for (const word of strs) {
    const txt = [...word]
      .sort((a, b) => a.codePointAt(0) - b.codePointAt(0))
      .join('');
    if (!dict[txt]) {
      dict[txt] = [];
    }
    dict[txt].push(word);
  }
  return Object.values(dict);
};
