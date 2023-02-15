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
  return dfsStack(adjList, source, destination, seen);
};

function dfsStack(graph, source, destination, seen) {
  const stack = [];
  stack.push(source);
  while (stack.length !== 0) {
      const current = stack.pop();
      if (current === destination) {
          return true;
      }
      const neighbors = graph.get(current) || [];
      for (const n of neighbors) {
          if (!seen.has(n)) {
              seen.add(n);
              stack.push(n);
          }
      }
  }
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