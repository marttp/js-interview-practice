const { Queue } = require('@datastructures-js/queue');
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const length = beginWord.length;
  // wordlist contains -> Set(wordList) -> O(1)
  const wordSet = new Set(wordList);
  // init == 1
  // beginWord to Queue
  const queue = new Queue();
  queue.enqueue([beginWord, 1]);

  // shortest -> BFS
  while (!queue.isEmpty()) {
    const [currWord, d] = queue.dequeue();
    if (currWord === endWord) {
      return d;
    }
    for (let i = 0; i < length; i++) {
      // change 1 character per time
      // Slice string
      const prefix = i === 0 ? '' : currWord.slice(0, i);
      const suffix = i === length - 1 ? '' : currWord.slice(i + 1);
      // change -> a - z -> replace char by char
      for (let j = 0; j < 26; j++) {
        const c = fromCP(j);
        const nextWord = [...prefix, c, ...suffix].join('');
        if (wordSet.has(nextWord)) {
          wordSet.delete(nextWord);
          queue.enqueue([nextWord, d + 1]);
        }
      }
    }
  }

  return 0;
};

function fromCP(i) {
  const cp = 'a'.codePointAt(0) + i;
  return String.fromCodePoint(cp);
}

// 3 characters
// h   i    t

// ?   i  t => (a-z) i t
// h   ?  t => h (a-z) t
// h   i  ? => h i (a-z)
// // Slice string
// // increment a - z + concat string to new word

// Generate new word => check if it in wordSet
// if in wordSet => consider to next move + increment distance => Queue
//                  + remove from set

// Do until got endWord => end => return distance
