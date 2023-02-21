const { Queue } = require('@datastructures-js/queue');
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

var updateMatrix = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  const result = Array(m)
    .fill(null)
    .map(() => Array(n).fill(Number.MAX_SAFE_INTEGER));
  const queue = new Queue();

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (mat[r][c] === 0) {
        result[r][c] = 0;
        queue.enqueue([r, c]);
      }
    }
  }

  while (!queue.isEmpty()) {
    const [r, c] = queue.dequeue();
    for (const d of DIRECTIONS) {
      const nr = r + d[0];
      const nc = c + d[1];
      if (isInbound(mat, nr, nc) && result[r][c] + 1 < result[nr][nc]) {
        result[nr][nc] = result[r][c] + 1;
        queue.enqueue([nr, nc]);
      }
    }
  }

  return result;
};

function isInbound(mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;
  return r >= 0 && r < m && c >= 0 && c < n;
}
