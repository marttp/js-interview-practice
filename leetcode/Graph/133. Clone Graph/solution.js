const { Queue } = require('@datastructures-js/queue');
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (node === null) {
    return null;
  }
  const cloneMap = new Map();
  cloneMap.set(node, new Node(node.val, []));
  const queue = new Queue();
  queue.enqueue(node);

  while (!queue.isEmpty()) {
    const currNode = queue.dequeue();
    for (const n of currNode.neighbors) {
      if (!cloneMap.has(n)) {
        cloneMap.set(n, new Node(n.val, []));
        queue.enqueue(n);
      }
      cloneMap.get(currNode).neighbors.push(cloneMap.get(n));
    }
  }

  return cloneMap.get(node);
};
