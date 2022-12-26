var StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let span = 1;
  // Monotonic stack condition (modified)
  while (
    this.stack.length !== 0 &&
    price >= this.stack[this.stack.length - 1][0]
  ) {
    const prevStock = this.stack.pop();
    span += prevStock[1];
  }
  this.stack.push([price, span]);
  return this.stack[this.stack.length - 1][1];
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
