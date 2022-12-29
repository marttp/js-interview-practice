/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  if (!s.trim()) return s;
  txt = [...s];

  let left = 0;
  let right = txt.length - 1;
  while (left < right) {
    while (left < right && !isVowel(txt[left])) left++;
    while (left < right && !isVowel(txt[right])) right--;
    let tmp = txt[left];
    txt[left++] = txt[right];
    txt[right--] = tmp;
  }

  return txt.join('');
};

const isVowel = (c) => {
  return /[aeiouAEIOU]/.test(c);
};
