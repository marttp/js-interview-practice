/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const uf = new UnionFind(n);
  isConnected.forEach((v, i) => {
    for (let neighbor = 0; neighbor < v.length; neighbor++) {
      if (v[neighbor]) {
        uf.union(i, neighbor);
      }
    }
  });

  let province = 0;
  for (let i = 0; i < uf.parent.length; i++) {
    if (uf.parent[i] === i) {
      province += 1;
    }
  }
  return province;
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
