const { Queue } = require('@datastructures-js/queue');
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // Initial
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
  // Pre-BFS
  const queue = new Queue();
  // Push source course
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.enqueue(i);
    }
  }
  // Start Topological Sort
  while (!queue.isEmpty()) {
    const course = queue.dequeue();
    for (const next of graph[course]) {
      inDegree[next] -= 1;
      if (inDegree[next] === 0) {
        queue.enqueue(next);
      }
    }
  }
  // Check if still has inDegree unvisited
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] !== 0) {
      return false;
    }
  }
  return true;
};
