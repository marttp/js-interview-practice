/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length <= 1) {
    return 0;
  }
  intervals.sort((a, b) => a[1] - b[1]);
  const n = intervals.length;
  let nonOverlap = 1;
  let end = intervals[0][1];
  for (let i = 0; i < n; i++) {
    if (end <= intervals[i][0]) {
      nonOverlap += 1;
      end = intervals[i][1];
    }
  }
  return n - nonOverlap;
};
