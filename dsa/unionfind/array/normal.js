class UnionFindArr {
  // Implement by array need limit size
  constructor(size) {
    this.size = size;
    // Space Complexity: O(n)
    this.parent = Array(this.size);
    for (let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i;
    }
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    // If root not match -> Merge -> true because of we merged
    if (rootX !== rootY) {
      this.parent[rootY] = rootX;
      return true;
    }
    // else -> false -> already in subset
    return false;
  }

  find(x) {
    // Time Complexity: O(n)
    if (this.parent[x] === x) {
      return x;
    }
    return this.find(this.parent[x]);
  }
}
