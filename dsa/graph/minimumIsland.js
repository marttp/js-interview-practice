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

const minIsland = (grid) => {
  if (grid.length === 0 || grid[0].length === 0) return 0;
  const visited = new Set();
  let min = Number.MAX_SAFE_INTEGER;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (!visited.has(key(r, c))) {
        let area = traverse(grid, r, c, visited);
        min = Math.min(min, area);
      }
    }
  }
  return min;
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
    return 0;
  }
  let area = 1;
  visited.add(key(r, c));
  for (const [dr, dc] of DIRECTIONS) {
    area += traverse(grid, r + dr, c + dc, visited);
  }
  return area;
};

const key = (r, c) => `${r}:${c}`;

export default minIsland;
