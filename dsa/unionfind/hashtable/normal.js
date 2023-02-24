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
    const rootX = this.parent.get(x);
    const rootY = this.parent.get(y);
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
    let result = x;
    while (this.parent.get(result) !== x) {
      result = this.parent.get(result);
    }
    return result;
  }
}
