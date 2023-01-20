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
var maxPathSum = function (root) {
  const maxPathValue = [Number.MIN_SAFE_INTEGER];
  findMax(root, maxPathValue);
  return maxPathValue[0];
};

function findMax(node, maxPathValue) {
  if (node === null) {
    return 0;
  }
  // Default 0 because if sum of path has become negative
  // Not select is better
  const left = Math.max(findMax(node.left, maxPathValue), 0);
  const right = Math.max(findMax(node.right, maxPathValue), 0);
  const sum = node.val + left + right;
  maxPathValue[0] = Math.max(maxPathValue[0], sum);
  return node.val + Math.max(left, right);
}
