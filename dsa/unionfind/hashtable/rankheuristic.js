class UnionFindMap {
  constructor() {
    // new UnionFind();
    this.parent = new Map();
    this.ranking = new Map();
  }

  prerequisiteCheck(e) {
    if (!this.parent.has(e)) {
      this.parent.set(e, e);
      this.ranking.set(e, 0);
    }
  }

  union(x, y) {
    this.prerequisiteCheck(x);
    this.prerequisiteCheck(y);
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      const rankX = this.ranking.get(rootX);
      const rankY = this.ranking.get(rootY);
      if (rankX < rankY) {
        this.parent.set(rootX, rootY);
      } else if (rankX > rankY) {
        this.parent.set(rootY, rootX);
      } else {
        this.parent.set(rootX, rootY);
        this.ranking.set(rootY, this.ranking.get(rootY) + 1);
      }
      return true;
    }
    return false;
  }

  find(x) {
    if (!this.parent.has(x)) {
      throw new Error('The element not found');
    }
    // Path Compression
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }
}
