export class BTNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export class TNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}
