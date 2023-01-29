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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const value = [-1];
  const topK = [k];
  inorder(root, topK, value);
  return value[0];
};

function inorder(node, topK, value) {
  if (node === null) return;
  inorder(node.left, topK, value);
  if (topK[0] !== 0) {
    topK[0] -= 1;
    value[0] = node.val;
    if (topK[0] == 0) {
      return;
    }
  }
  inorder(node.right, topK, value);
}
