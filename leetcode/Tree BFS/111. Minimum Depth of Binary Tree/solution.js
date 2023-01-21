/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;
  const queue = [root];
  let level = 0;
  while (queue.size !== 0) {
    level += 1;
    let size = queue.length;
    while (size !== 0) {
      const node = queue.shift();
      if (isLeaf(node)) {
        return level;
      }
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      size -= 1;
    }
  }
  return -1;
};

const isLeaf = (node) => node.left === null && node.right === null;
