/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  const queue = [];
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }
  while (queue.length > 1) {
    for (let i = 0; i < k - 1; i++) {
      const live = queue.shift();
      queue.push(live);
    }
    queue.shift();
  }
  return queue[0];
};
