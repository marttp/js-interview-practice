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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];
  traverse(root, targetSum, result);
  return result;
};

function isLeaf(node) {
  return node.left === null && node.right === null;
}

function traverse(node, targetSum, result, tmpList = []) {
  if (node === null) {
    return;
  }
  tmpList.push(node.val);
  if (isLeaf(node) && targetSum === node.val) {
    result.push([...tmpList]);
  } else {
    traverse(node.left, targetSum - node.val, result, tmpList);
    traverse(node.right, targetSum - node.val, result, tmpList);
  }
  tmpList.pop();
}
