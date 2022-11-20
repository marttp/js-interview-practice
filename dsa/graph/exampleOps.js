import { adjacencyList } from './represent.js';

import connectCount from './connectedComponentCount.js';
import largestCount from './largestCount.js';

console.log('====================================');
console.log(`connectCount: ${connectCount(adjacencyList)}`);
console.log('====================================');
console.log(`largestCount: ${largestCount(adjacencyList)}`);
console.log('====================================');