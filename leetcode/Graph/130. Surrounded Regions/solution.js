/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// UP/DOWN/LEFT/RIGHT
const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const MARKER = '#';
const O = 'O';
const X = 'X';

var solve = function (board) {
  const m = board.length;
  const n = board[0].length;
  // Border traversal
  // Top
  for (let c = 0; c < n; c++) if (board[0][c] === O) traverse(board, 0, c);
  // Bottom
  for (let c = 0; c < n; c++)
    if (board[m - 1][c] === O) traverse(board, m - 1, c);
  // Left
  for (let r = 0; r < m; r++) if (board[r][0] === O) traverse(board, r, 0);
  // Right
  for (let r = 0; r < m; r++)
    if (board[r][n - 1] === O) traverse(board, r, n - 1);
  // Loop flipped
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === MARKER) board[r][c] = O;
      else if (board[r][c] === O) board[r][c] = X;
    }
  }
};

function traverse(board, r, c) {
  if (!isInbound(board, r, c) || board[r][c] !== 'O') {
    return;
  }
  board[r][c] = MARKER;
  for (const d of DIRECTIONS) {
    traverse(board, r + d[0], c + d[1]);
  }
}

function isInbound(board, r, c) {
  return r >= 0 && r < board.length && c >= 0 && c < board[0].length;
}
