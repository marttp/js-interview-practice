// edgeList = [['a','b'], ['b', 'c']]
// or use class instead
export const buildGraph = (edgeList = []) => {
  const graph = {};
  for (const [a, b] of edgeList) {
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
