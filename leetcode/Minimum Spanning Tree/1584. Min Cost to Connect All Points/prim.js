const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    if (points === null || points.length === 0) {
        return 0;
    }
    // point1 = [0,0] = source
    // point2 = [2,2] = target
    // weight = |0 - 2| + |0 - 2|
    const n = points.length;
    // edge = [source, target, cost]

    // Prim's 1-select whatever vertex
    const s = points[0];
    const pq = new MinPriorityQueue({ priority: (edge) => edge[2] });
    for (let i = 1; i < n; i++) {
        const t = points[i];
        const w = Math.abs(s[0] - t[0]) + Math.abs(s[1] - t[1]); // weight
        pq.enqueue([0, i, w]);
    }

    // required edge = n - 1
    let cost = 0;
    let expectedEdge = n - 1;
    const visited = new Array(n).fill(false);
    visited[0] = true;

    while (!pq.isEmpty() && expectedEdge > 0) {
        const edge = pq.dequeue().element;
        if (!visited[edge[1]]) {
            cost += edge[2];
            expectedEdge -= 1;
            visited[edge[1]] = true;
            const s = points[edge[1]];
            for (let i = 0; i < n; i++) {
                if (!visited[i]) {
                    const t = points[i];
                    const w = Math.abs(s[0] - t[0]) + Math.abs(s[1] - t[1]); // weight
                    pq.enqueue([edge[1], i, w]);
                }
            }
        }
    }
    return cost;
};