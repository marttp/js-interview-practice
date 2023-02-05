var MedianFinder = function () {
  this.nums = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.nums.push(num);
  this.nums.sort((a, b) => a - b); // n log(n)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const size = this.nums.length;
  const isEven = size % 2 == 0;
  if (isEven) {
    const index = Math.floor(size / 2);
    return (this.nums[index - 1] + this.nums[index]) * 0.5;
  }
  return this.nums[Math.floor(size / 2)];
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
