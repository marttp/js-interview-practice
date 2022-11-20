import { adjacencyList } from './represent.js';

export const dfsDG = (graph, source, target) => {
  if (source === target) return true;
  if (!source || !graph[source]) return false;
  for (const neighbor of graph[source]) {
    if (dfsDG(graph, neighbor, target)) {
      return true;
    }
  }
  return false;
};

export const dfsUDG = (graph, source, target, seen = new Set()) => {
  if (source === target) return true;
  if (!source || !graph[source] || seen.has(source)) return false;
  seen.add(source);
  for (const neighbor of graph[source]) {
    if (dfsUDG(graph, neighbor, target, seen)) {
      return true;
    }
  }
  return false;
};

export const bfsDG = (graph, source, target) => {
  if (!source || !graph[source]) return false;
  const queue = [source];
  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode === target) {
      return true;
    }
    for (const neighbor of graph[currentNode]) {
      queue.push(neighbor);
    }
  }
  return false;
};

export const bfsUDG = (graph, source, target) => {
  if (!source && !graph[source]) return false;
  const queue = [source];
  const seen = new Set(source);
  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode === target) {
      return true;
    }
    for (const neighbor of graph[currentNode]) {
      if (!seen.has(neighbor)) {
        queue.push(neighbor);
        seen.add(neighbor);
      }
    }
  }
  return false;
};

console.log(`Result: ${dfsDG(adjacencyList, 'a', 'd')}`);
console.log(`Result: ${dfsDG(adjacencyList, 'a', 'f')}`);
console.log(`Result: ${bfsDG(adjacencyList, 'a', 'd')}`);
