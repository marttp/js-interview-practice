/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const uf = new UnionFind(n);
  for (const [u, v] of edges) {
    uf.union(u, v);
  }
  return uf.find(source) === uf.find(destination);
};

class UnionFind {
  constructor(n) {
    this.parent = Array(n);
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
    if (this.parent[x] === x) {
      return x;
    }
    return (this.parent[x] = this.find(this.parent[x]));
  }
}
