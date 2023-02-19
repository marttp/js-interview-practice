/**
 * @param {character[][]} grid
 * @return {number}
 */

const LAND = '1';
const WATER = '0';
// UP/DOWN/LEFT/RIGHT
const DIRECTIONS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

var numIslands = function (grid) {
  let islands = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      // Face land
      if (grid[r][c] === LAND) {
        islands += 1;
        surveyIsland(grid, r, c);
      }
    }
  }
  return islands;
};

function surveyIsland(grid, r, c) {
  if (!isInbound(grid, r, c) || grid[r][c] === WATER) {
    return;
  }
  grid[r][c] = WATER;
  for (const d of DIRECTIONS) {
    surveyIsland(grid, r + d[0], c + d[1]);
  }
}

function isInbound(grid, r, c) {
  return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
}
