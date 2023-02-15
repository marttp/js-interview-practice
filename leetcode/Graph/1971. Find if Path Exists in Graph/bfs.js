const { Queue } = require('@datastructures-js/queue');
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
  return bfs(adjList, source, destination, seen);
};

function bfs(graph, source, destination, seen) {
  const queue = new Queue();
  queue.enqueue(source);
  while (!queue.isEmpty()) {
      const current = queue.dequeue();
      if (current === destination) {
          return true;
      }
      const neighbors = graph.get(current) || [];
      for (const n of neighbors) {
          if (!seen.has(n)) {
              seen.add(n);
              queue.enqueue(n);
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