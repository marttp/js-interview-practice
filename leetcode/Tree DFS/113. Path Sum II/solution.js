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
  backtracking(root, targetSum, result, []);
  return result;
};

function backtracking(node, targetSum, result, tmpList) {
  if (node === null) return;
  // Add
  tmpList.push(node.val);
  // Traverse Preorder/Inorder/Postorder
  backtracking(node.left, targetSum - node.val, result, tmpList);
  backtracking(node.right, targetSum - node.val, result, tmpList);
  // Leaf condition
  if (node.left === null && node.right === null && targetSum === node.val) {
    result.push([...tmpList]);
  }
  // Remove last
  tmpList.pop();
}
