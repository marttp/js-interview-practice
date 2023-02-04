const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const pq = new MinPriorityQueue({ priority: (p) => p[0] + p[1] });
  for (const u of nums1) {
    pq.enqueue([u, nums2[0], 0]);
  }
  const result = [];
  while (!pq.isEmpty() && k > 0) {
    const pair = pq.dequeue().element;
    result.push([pair[0], pair[1]]);
    const nextVIndex = pair[2] + 1;
    if (nextVIndex < nums2.length) {
      pq.enqueue([pair[0], nums2[nextVIndex], nextVIndex]);
    }
    k -= 1;
  }
  return result;
};
