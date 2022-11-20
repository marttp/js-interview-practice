const largestCount = (graph) => {
  const seen = new Set();
  let max = 0;
  for (const vertex in graph) {
    const componentCount = explore(graph, vertex, seen);
    max = Math.max(max, componentCount);
  }
  return max;
};

const explore = (graph, source, seen = new Set()) => {
  if (seen.has(source)) return 0;
  seen.add(source);
  let count = 1;
  for (const neighbor of graph[source]) {
    count += explore(graph, neighbor, seen);
  }
  return count;
};

export default largestCount;
