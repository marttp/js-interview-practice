import { BTNode } from './node.js';

export const createMockBinaryTree = () => {
  const f = new BTNode(8);
  const e = new BTNode(6);
  const d = new BTNode(4);
  const c = new BTNode(7, null, f);
  const b = new BTNode(2, d, e);
  const a = new BTNode(5, b, c);
  /**
        5
       / \
      2   7
     / \   \
    4   6   8
  */
  return a;
};
