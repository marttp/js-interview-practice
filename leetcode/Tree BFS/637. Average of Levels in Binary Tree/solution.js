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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const queue = [root];
  const result = [];
  while (queue.length !== 0) {
    const size = queue.length;
    let remaining = size;
    let sum = 0;
    while (remaining !== 0) {
      const node = queue.shift();
      sum += node.val;
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      remaining -= 1;
    }
    const avg = (sum / size).toFixed(5);
    result.push(avg);
  }
  return result;
};
