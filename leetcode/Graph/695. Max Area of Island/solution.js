/**
 * @param {number[][]} grid
 * @return {number}
 */

const LAND = 1;
const WATER = 0;
const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  // Compare if land exists
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === LAND) {
        let localArea = islandSurvey(grid, r, c);
        maxArea = Math.max(maxArea, localArea);
      }
    }
  }
  return maxArea;
};

function islandSurvey(grid, r, c) {
  if (!isInbound(grid, r, c) || grid[r][c] !== LAND) {
    return 0;
  }
  let area = 1;
  grid[r][c] = WATER;
  for (const d of DIRECTIONS) {
    area += islandSurvey(grid, r + d[0], c + d[1]);
  }
  return area;
}

function isInbound(grid, r, c) {
  return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
}
