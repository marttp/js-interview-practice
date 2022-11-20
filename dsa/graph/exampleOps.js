import { adjacencyList } from './represent.js';
import { buildGraph } from './undirectGraph.js';

import connectCount from './connectedComponentCount.js';
import largestCount from './largestCount.js';
import shortestPath from './shortestPath.js';

const edges = [
  ['w', 'x'],
  ['w', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];
const undirectGraph = buildGraph(edges);
console.log(undirectGraph);

console.log('====================================');
console.log(`connectCount: ${connectCount(adjacencyList)}`);
console.log('====================================');
console.log(`largestCount: ${largestCount(adjacencyList)}`);
console.log('====================================');
console.log(`shortestPath: ${shortestPath(undirectGraph, 'z', 'x')}`);
console.log('====================================');