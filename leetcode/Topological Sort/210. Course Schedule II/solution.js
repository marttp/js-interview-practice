const { Queue } = require('@datastructures-js/queue');
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = {};
  const inDegree = {};
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
    inDegree[i] = 0;
  }
  for (const [course, preq] of prerequisites) {
    graph[preq].push(course);
    inDegree[course] += 1;
  }

  const queue = new Queue();
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.enqueue(i);
    }
  }
  const result = [];
  // Start Topological Sort
  while (!queue.isEmpty()) {
    const course = queue.dequeue();
    result.push(course);
    for (const next of graph[course]) {
      inDegree[next] -= 1;
      if (inDegree[next] === 0) {
        queue.enqueue(next);
      }
    }
  }
  // Check false case
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] !== 0) {
      return [];
    }
  }
  return result;
};
