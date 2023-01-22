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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const result = [];
  if (root === null) return result;
  const queue = [root];
  let trigger = 0;
  while (queue.length !== 0) {
    const level = [];
    let size = queue.length;
    while (size !== 0) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
      size -= 1;
    }
    if (trigger) level.reverse();
    result.push(level);
    trigger ^= 1;
  }
  return result;
};
