const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  // [3,3,sqrt(18)]
  const pq = new MaxPriorityQueue({ priority: (p) => p[2] });
  for (const p of points) {
    pq.enqueue([p[0], p[1], euclideanDistance(p)]);
    if (pq.size() > k) {
      pq.dequeue();
    }
  }
  const result = [];
  while (!pq.isEmpty()) {
    const [x, y] = pq.dequeue().element;
    result.push([x, y]);
  }
  return result;
};

function euclideanDistance(point) {
  const x = Math.pow(point[0], 2);
  const y = Math.pow(point[1], 2);
  return Math.sqrt(x + y);
}
