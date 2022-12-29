/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    const value = matrix[row][col];
    if (value === target) {
      return true;
    }
    if (value < target) {
      row += 1;
    } else {
      col -= 1;
    }
  }
  return false;
};
