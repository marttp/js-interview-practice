const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const freqMap = {};
  for (const c of s) {
    if (!(c in freqMap)) freqMap[c] = 0;
    freqMap[c] += 1;
  }
  const pq = new MaxPriorityQueue({ priority: (e) => e[1] });
  for (const entry of Object.entries(freqMap)) {
    pq.enqueue(entry);
  }
  // 0 == key
  // 1 == value
  return pq
    .toArray()
    .map((entry) => entry.element[0].repeat(entry.element[1]))
    .join('');
};
