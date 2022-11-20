import { adjacencyList } from './represent.js';

export const dfsStack = (graph, source) => {
  if (!source || !graph[source]) return [];
  const stack = [source];
  const result = [];
  const seen = new Set(source);
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node);

    for (const neighbor of graph[node]) {
      if (!seen.has(neighbor)) {
        stack.push(neighbor);
        seen.add(neighbor);
      }
    }
  }
  return result;
};

export const dfsRecursive = (graph, source, result = [], seen = new Set()) => {
  if (!source || !graph[source]) return [];
  result.push(source);
  seen.add(source);
  for (const neighbor of graph[source]) {
    if (!seen.has(neighbor)) {
      dfsRecursive(graph, neighbor, result, seen);
    }
  }
  return result;
};

export const bfs = (graph, source) => {
  if (!source || !graph[source]) return [];
  const queue = [source];
  const result = [];
  const seen = new Set(source);
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);
    for (const neighbor of graph[node]) {
      if (!seen.has(neighbor)) {
        queue.push(neighbor);
        seen.add(neighbor);
      }
    }
  }
  return result;
};

console.log(`Result: ${dfsStack(adjacencyList, 'a')}`);
console.log(`Result: ${dfsRecursive(adjacencyList, 'a')}`);
console.log(`Result: ${bfs(adjacencyList, 'a')}`);
