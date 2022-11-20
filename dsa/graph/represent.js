export const adjacencyList = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: [],
  e: ['b'],
  f: ['d'],
};

// a - f : 0 - 5
// Mark as 1 itself only if has edge
export const adjacencyMatrix = [
  [0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0],
];
// Weight Direct Graph? Use weight instead of 1
