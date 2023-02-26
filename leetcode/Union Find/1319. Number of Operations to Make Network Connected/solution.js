/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  const uf = new UnionFind(n);
  let unnecessaryCable = 0;
  for (const [u, v] of connections) {
    if (!uf.union(u, v)) {
      unnecessaryCable += 1;
    }
  }

  let numberOfNetwork = 0;
  for (let i = 0; i < uf.parent.length; i++) {
    if (uf.parent[i] === i) {
      numberOfNetwork += 1;
    }
  }

  // If 2 networks -> required 1 cables
  // If 3 networks  -> required 2 cables
  if (unnecessaryCable >= numberOfNetwork - 1) {
    return numberOfNetwork - 1;
  }

  return -1;
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
