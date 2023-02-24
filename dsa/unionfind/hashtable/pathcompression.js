class UnionFindMap {
  constructor() {
    // new UnionFind();
    this.parent = new Map();
  }

  prerequisiteCheck(e) {
    if (!this.parent.has(e)) {
      this.parent.set(e, e);
    }
  }

  union(x, y) {
    this.prerequisiteCheck(x);
    this.prerequisiteCheck(y);
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent.set(rootY, rootX);
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
