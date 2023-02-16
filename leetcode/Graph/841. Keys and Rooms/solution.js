/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  dfs(rooms, 0, visited);
  return visited.size === rooms.length;
};

function dfs(rooms, current, visited) {
  if (!visited.has(current)) {
    visited.add(current);
    for (const key of rooms[current]) {
      dfs(rooms, key, visited);
    }
  }
}
