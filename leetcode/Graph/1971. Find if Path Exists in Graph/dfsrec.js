/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  const adjList = buildGraph(edges);
  const seen = new Set();
  return dfsRecursive(adjList, source, destination, seen);
};

function dfsRecursive(graph, current, destination, seen) {
  if (current === destination) {
      return true;
  }
  const neighbors = graph.get(current) || [];
  for (const n of neighbors) {
      if (!seen.has(n)) {
          seen.add(n);
          if (dfsRecursive(graph, n, destination, seen)) {
              return true;
          }
      }
  }
  // default
  return false;
}


function buildGraph(edges) {
  const adjList = new Map();
  for (const [u, v] of edges) {
      // default
      if (!adjList.has(u)) adjList.set(u, []);
      if (!adjList.has(v)) adjList.set(v, []);
      // cross put neighbor
      adjList.get(u).push(v);
      adjList.get(v).push(u);
  }
  return adjList;
}