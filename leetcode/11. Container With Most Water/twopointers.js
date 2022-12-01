/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const verticalLineLeft = height[left];
    const verticalLineRight = height[right];
    const h = Math.min(verticalLineLeft, verticalLineRight);
    const w = right - left;
    const area = h * w;
    max = Math.max(max, area);
    if (verticalLineLeft < verticalLineRight) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return max;
};
