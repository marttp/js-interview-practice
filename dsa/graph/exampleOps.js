import { adjacencyList } from './represent.js';

import connectCount from './connectedComponentCount.js';

console.log('====================================');
console.log(`connectCount: ${connectCount(adjacencyList)}`);
console.log('====================================');