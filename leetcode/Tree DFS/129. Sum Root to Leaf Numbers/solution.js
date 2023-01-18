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
var sumNumbers = function (root, current = 0) {
  if (root === null) {
    return 0;
  }
  current = current * 10 + root.val;
  if (root.left === null && root.right === null) {
    return current;
  }
  return sumNumbers(root.left, current) + sumNumbers(root.right, current);
};
