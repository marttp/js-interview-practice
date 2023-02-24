class UnionFindArr {
  // Implement by array need limit size
  constructor(size) {
    this.size = size;
    // Space Complexity: O(n)
    this.parent = Array(this.size);
    this.ranking = Array(this.size);
    for (let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i;
      this.ranking[i] = 0;
    }
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    // If root not match -> Merge -> true because of we merged
    if (rootX !== rootY) {
      const rankX = this.ranking[rootX];
      const rankY = this.ranking[rootY];
      if (rankX < rankY) {
        this.parent[rootX] = rootY;
      } else if (rankX > rankY) {
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootX] = rootY;
        this.ranking[rootY] += 1;
      }
      return true;
    }
    // else -> false -> already in subset
    return false;
  }

  find(x) {
    if (this.parent[x] === x) {
      return x;
    }
    // Time Complexity: O(log n)
    return (this.parent[x] = this.find(this.parent[x]));
  }
}
