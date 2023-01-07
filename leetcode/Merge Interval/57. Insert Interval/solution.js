/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }
  let result = [];
  let i = 0;
  const n = intervals.length;
  // scan until overlap - Do condition inter[i].end < new.start
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i++]);
  }
  // merge overlap until non-overlap - inter[i].start <= new.end
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  // push interval
  result.push(newInterval);
  // push all the rest - scan the rest to put
  return [...result, ...intervals.slice(i)];
};

// intervals = [[1,3],[6,9]], newInterval = [4,7] // scan until overlap

// intervals = [[1,3],[6,9]], newInterval = [2,5] // merge overlap until non-overlap
// [1    3]
//    [2    5] => [1     5]

// newInterval = [10,12] => [[1,3],[6,9],[10,12]] // push interval

// // push the rest
// intervals = [[1,3],[6,9]] newInterval = [2,5]
// After merge to [1,5] => push
// [[1,5],[6,9]]
