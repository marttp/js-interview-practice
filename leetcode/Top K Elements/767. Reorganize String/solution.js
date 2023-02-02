const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  // entry [key,value]
  const freq = {};
  for (const c of s) {
    if (!(c in freq)) freq[c] = 0;
    freq[c] += 1;
  }
  const pq = new MaxPriorityQueue({ priority: (e) => e[1] });
  for (const e of Object.entries(freq)) {
    pq.enqueue(e);
  }
  const tmpWord = [];
  let prevEntry = null;
  while (!pq.isEmpty()) {
    const e = pq.dequeue().element;
    if (prevEntry !== null && prevEntry[1] > 0) {
      pq.enqueue(prevEntry);
    }
    e[1] -= 1;
    tmpWord.push(e[0]);
    prevEntry = e;
  }

  const builtWord = tmpWord.join('');

  return s.length === builtWord.length ? builtWord : '';
};
