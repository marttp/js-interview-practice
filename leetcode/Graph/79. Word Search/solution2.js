/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const DIRS_2 = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const MARKED = '#';

var exist = function (board, word) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (word[0] === board[r][c] && dfs(board, word, 0, r, c)) {
        return true;
      }
    }
  }
  return false;
};

// return boolean
function dfs(board, word, curr, r, c) {
  // Base - Success
  if (word.length === curr) {
    return true;
  }
  // Base - Failed
  // 1 - Exceed
  // 2 - char not match board <=> word
  // 3 - equals MARKED
  if (
    !isInbound(board, r, c) ||
    word[curr] !== board[r][c] ||
    board[r][c] === MARKED
  ) {
    return false;
  }
  // Backtracking - Mark & tmp char
  const tmp = board[r][c];
  board[r][c] = MARKED;
  let result = false;
  // Traverse DFS 4 Directions
  for (const d of DIRS_2) {
    result ||= dfs(board, word, curr + 1, r + d[0], c + d[1]);
  }
  // Backtracking - Put back value
  board[r][c] = tmp;
  return result;
}

function isInbound(board, r, c) {
  const m = board.length;
  const n = board[0].length;
  return r >= 0 && r < m && c >= 0 && c < n;
}
