import { createMockBinaryTree } from './example_tree_construct.js';

export const depthFirstValue = (root) => {
  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return result;
};

export const dfsRecursive = (root, result = []) => {
  if (root) {
    result.push(root.val);
    dfsRecursive(root.left, result);
    dfsRecursive(root.right, result);
  }
  return result;
};

export const dfsAlternative = (root) => {
  if (!root) return [];
  return [root.val, ...dfsAlternative(root.left), ...dfsAlternative(root.right)];
  // BELOW DON'T DO IN INTERVIEW
  // return root ? [root.val, ...dfsAlternative(root.left), ...dfsAlternative(root.right)] : [];
};

export const preOrder = (root, result = []) => {
  if (root) {
    result.push(root.val);
    preOrder(root.left, result);
    preOrder(root.right, result);
  }
  return result;
};

export const inOrder = (root, result = []) => {
  if (root) {
    inOrder(root.left, result);
    result.push(root.val);
    inOrder(root.right, result);
  }
  return result;
};

export const postOrder = (root, result = []) => {
  if (root) {
    postOrder(root.left, result);
    postOrder(root.right, result);
    result.push(root.val);
  }
  return result;
};

// const mockBst = createMockBinaryTree();
// console.log(depthFirstValue(mockBst));
// console.log(dfsRecursive(mockBst));
// console.log(dfsAlternative(mockBst));
// console.log(preOrder(mockBst));
// console.log(inOrder(mockBst));
// console.log(postOrder(mockBst));
