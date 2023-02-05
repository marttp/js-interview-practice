const {
  MinPriorityQueue,
  MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');

var MedianFinder = function () {
  this.maxHeap = new MaxPriorityQueue();
  this.minHeap = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.minHeap.enqueue(num);
  this.maxHeap.enqueue(this.minHeap.dequeue().element);
  // Rebalance
  if (this.maxHeap.size() > this.minHeap.size()) {
    this.minHeap.enqueue(this.maxHeap.dequeue().element);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const isMatchSize = this.maxHeap.size() === this.minHeap.size();
  if (isMatchSize) {
    const n1 = this.maxHeap.front().element;
    const n2 = this.minHeap.front().element;
    return (n1 + n2) * 0.5;
  }
  return this.minHeap.front().element;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
