/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let lastKilled = 0;
  for (let i = 1; i <= n; i++) {
    lastKilled = (lastKilled + k) % i;
  }
  return lastKilled + 1;
};
