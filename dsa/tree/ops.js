import { createMockBinaryTree } from './example_tree_construct.js';
import { dfsRecursive } from './dfs.js';

export const treeBfs = (root, target) => {
  if (!root) return false;
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.val === target) return true;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return false;
};

export const treeDfs = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;
  return treeDfs(root.left, target) || treeDfs(root.right, target);
};

export const treeSum = (root) => {
  if (!root) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
};

export const sumTwoTree = (t1, t2) => {
  if (!t1) return t2;
  if (!t2) return t1;
  t1.val += t2.val;
  sumTwoTree(t1.left, t2.left);
  sumTwoTree(t1.right, t2.right);
  return t1;
};

export const altSumTree = (root) => {
  if (!root) return 0;
  const queue = [root];
  let result = root.val;
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.left) {
      queue.push(node.left);
      result += node.left.val;
    }
    if (node.right) {
      queue.push(node.right);
      result += node.right.val;
    }
  }
  return result;
};

export const treeMin = (root) => {
  if (!root) return Number.MAX_VALUE;
  return Math.min(root.val, treeMin(root.left), treeMin(root.right));
};

export const maxRootToLeaf = (root) => {
  if (!root) return 0;
  // Guarding improve performance
  if (!root.left && !root.right) return root.val;
  const leftMost = maxRootToLeaf(root.left);
  const rightMost = maxRootToLeaf(root.right);
  return root.val + Math.max(leftMost, rightMost);
};

// const t1 = createMockBinaryTree();
// const t2 = createMockBinaryTree();
// console.log(dfsRecursive(sumTwoTree(t1, t2)));
