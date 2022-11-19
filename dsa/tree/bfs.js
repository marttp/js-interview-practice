import { createMockBinaryTree } from './example_tree_construct.js';

export const bfs = (root) => {
  const result = [];
  if (!root) return result;
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
};

const mockBst = createMockBinaryTree();
console.log(bfs(mockBst));
