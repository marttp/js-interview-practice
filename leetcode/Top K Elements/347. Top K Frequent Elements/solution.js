const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = {};
  for (const n of nums) {
    if (!(n in freqMap)) freqMap[n] = 0;
    freqMap[n] += 1;
  }
  const pq = new MinPriorityQueue({ priority: (e) => e[1] });
  for (const entry of Object.entries(freqMap)) {
    pq.enqueue(entry);
    if (pq.size() > k) pq.dequeue();
  }
  const result = [];
  while (k-- > 0) {
    result.push(pq.dequeue().element[0]);
  }
  return result;
};
