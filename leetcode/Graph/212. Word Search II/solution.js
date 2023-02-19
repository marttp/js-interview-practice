const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const MARKED = '#';

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function (board, words) {
  const result = [];
  // build Trie
  const rootTrie = buildTrie(words);
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      dfs(board, r, c, rootTrie, result);
    }
  }
  return result;
};

function dfs(board, r, c, trieNode, result) {
  // Backtracking - tmp char
  const tmp = board[r][c];
  const nextIndex = findIndex(tmp);
  // Base - Failed
  // 1 - Exceed
  // 2 - equals MARKED
  // 3 - next char unavailable in Trie
  if (
    !isInbound(board, r, c) ||
    tmp === MARKED ||
    trieNode.children[nextIndex] === null
  ) {
    return;
  }
  // Move trie pointer
  trieNode = trieNode.children[nextIndex];
  // Found Word!
  if (trieNode.word !== null) {
    result.push(trieNode.word);
    trieNode.word = null;
  }
  // Backtracking - Mark & tmp char
  board[r][c] = MARKED;
  // Traverse DFS 4 Directions
  for (const d of DIRS) {
    const nextRow = r + d[0];
    const nextCol = c + d[1];
    if (isInbound(board, nextRow, nextCol)) {
      dfs(board, nextRow, nextCol, trieNode, result);
    }
  }
  // Backtracking - Put back value
  board[r][c] = tmp;
}

function isInbound(board, r, c) {
  const m = board.length;
  const n = board[0].length;
  return r >= 0 && r < m && c >= 0 && c < n;
}

function buildTrie(words) {
  const root = new TrieNode();
  for (const w of words) {
    let ptr = root;
    for (const c of [...w]) {
      // if child on that index doesn't exists
      if (ptr.children[findIndex(c)] === null) {
        ptr.children[findIndex(c)] = new TrieNode();
      }
      ptr = ptr.children[findIndex(c)];
    }
    ptr.word = w;
  }
  return root;
}

function findIndex(c) {
  return c.codePointAt(0) - 'a'.codePointAt(0);
}

class TrieNode {
  constructor() {
    this.children = Array(26).fill(null);
    this.word = null;
  }
}
