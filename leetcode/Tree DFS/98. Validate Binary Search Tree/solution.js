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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return validateBST(root, null, null);
};

function validateBST(node, currentMin, currentMax) {
  if (node === null) {
    return true;
  }
  if (currentMax !== null && node.val >= currentMax) {
    return false;
  }
  if (currentMin !== null && node.val <= currentMin) {
    return false;
  }
  return (
    validateBST(node.left, currentMin, node.val) &&
    validateBST(node.right, node.val, currentMax)
  );
}
