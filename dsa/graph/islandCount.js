const DIRECTIONS = [
  // UP
  [0, -1],
  // RIGHT
  [1, 0],
  // DOWN
  [0, 1],
  // LEFT,
  [-1, 0],
];

const islandCount = (grid) => {
  if (grid.length === 0 || grid[0].length === 0) return 0;
  const visited = new Set();
  let island = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (!visited.has(key(r, c))) {
        island += 1;
        traverse(grid, r, c, visited);
      }
    }
  }
  return island;
};

const traverse = (grid, r, c, visited) => {
  const rowInbounds = r >= 0 && r < grid.length;
  const colInbounds = c >= 0 && c < grid[0].length;
  if (
    !rowInbounds ||
    !colInbounds ||
    grid[r][c] === 'W' ||
    visited.has(key(r, c))
  ) {
    return;
  }
  visited.add(key(r, c));
  for (const [dr, dc] of DIRECTIONS) {
    traverse(grid, r + dr, c + dc, visited);
  }
};

const key = (r, c) => `${r}:${c}`;

export default islandCount;
