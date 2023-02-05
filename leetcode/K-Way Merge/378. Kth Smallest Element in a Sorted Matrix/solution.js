const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const pq = new MinPriorityQueue({
    priority: (e) => matrix[e.arrIndex][e.currentIndex],
  });

  for (let r = 0; r < matrix.length; r++) {
    pq.enqueue(new Element(r, 0));
  }

  let result = null;
  while (!pq.isEmpty() && k > 0) {
    const element = pq.dequeue().element;
    result = matrix[element.arrIndex][element.currentIndex];
    const nextIndex = element.currentIndex + 1;
    if (nextIndex < matrix[element.arrIndex].length) {
      element.currentIndex += 1;
      pq.enqueue(element);
    }
    k -= 1;
  }
  return result;
};

class Element {
  constructor(a, c) {
    this.arrIndex = a;
    this.currentIndex = c;
  }
}
