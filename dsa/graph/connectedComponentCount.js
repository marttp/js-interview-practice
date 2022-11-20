const connectedComponentCount = (graph) => {
  const seen = new Set();
  let counter = 0;
  for (const vertex in graph) {
    if (!seen.has(vertex)) {
      counter += 1;
      explore(graph, vertex, seen);
    }
  }
  return counter;
};

const explore = (graph, source, seen = new Set()) => {
  if (seen.has(source)) return;
  seen.add(source);
  for (const neighbor of graph[source]) {
    explore(graph, neighbor, seen);
  } 
}

export default connectedComponentCount;
