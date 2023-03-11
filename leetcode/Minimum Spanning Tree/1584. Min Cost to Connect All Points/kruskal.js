const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  if (points === null || points.length === 0) {
    return 0;
  }
  const n = points.length;
  // edge = [source, target, cost]
  const pq = new MinPriorityQueue({ priority: (edge) => edge[2] });
  for (let i = 0; i < n; i++) {
    const s = points[i]; // source
    for (let j = i + 1; j < n; j++) {
      const t = points[j]; // target
      const w = Math.abs(s[0] - t[0]) + Math.abs(s[1] - t[1]); // weight
      pq.enqueue([i, j, w]);
    }
  }
  const uf = new UnionFind(n);
  // required edge = n - 1
  let cost = 0;
  let expectedEdge = n - 1;
  while (!pq.isEmpty() && expectedEdge > 0) {
    const [s, t, w] = pq.dequeue().element;
    if (uf.union(s, t)) {
      cost += w;
      expectedEdge -= 1;
    }
  }
  return cost;
};
// point1 = [0,0] = source
// point2 = [2,2] = target
// weight = |0 - 2| + |0 - 2|

class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent[rootY] = rootX;
      return true;
    }
    return false;
  }

  find(x) {
    if (x === this.parent[x]) {
      return x;
    }
    return (this.parent[x] = this.find(this.parent[x]));
  }
}
