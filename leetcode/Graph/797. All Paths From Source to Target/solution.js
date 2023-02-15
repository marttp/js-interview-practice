/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const result = [];
  const tmpList = [];
  const n = graph.length;
  dfs(graph, 0, n - 1, result, tmpList);
  return result;
};

function dfs(graph, current, dest, result, tmpList) {
  tmpList.push(current);
  if (current === dest) {
    result.push([...tmpList]);
    return;
  }
  for (const n of graph[current]) {
    dfs(graph, n, dest, result, tmpList);
    tmpList.pop();
  }
}
