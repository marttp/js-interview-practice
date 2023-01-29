/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const pq = new MaxPriorityQueue();
  for (const n of nums) {
    pq.enqueue(n);
  }
  let result = null;
  while (k-- > 0) {
    result = pq.dequeue().element;
  }
  return result;
};
