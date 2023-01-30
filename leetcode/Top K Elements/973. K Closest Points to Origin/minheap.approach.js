const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  // [3,3,sqrt(18)]
  const pq = new MinPriorityQueue({ priority: (p) => p[2] });
  for (const p of points) {
    pq.enqueue([p[0], p[1], euclideanDistance(p)]);
  }
  const result = [];
  while (k > 0) {
    const [x, y] = pq.dequeue().element;
    result.push([x, y]);
    k -= 1;
  }
  return result;
};

function euclideanDistance(point) {
  const x = Math.pow(point[0], 2);
  const y = Math.pow(point[1], 2);
  return Math.sqrt(x + y);
}
