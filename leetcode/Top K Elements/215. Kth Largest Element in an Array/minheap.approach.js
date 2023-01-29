/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const pq = new MinPriorityQueue();
  for (const n of nums) {
    pq.enqueue(n);
    if (pq.size() > k) {
      pq.dequeue();
    }
  }
  return pq.front().element;
};
