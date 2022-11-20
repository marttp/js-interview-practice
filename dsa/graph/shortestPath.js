const shortestPath = (graph, source, target) => {
  const queue = [[source, 0]];
  const visited = new Set();
  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === target) {
      return distance;
    }
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};

export default shortestPath;
