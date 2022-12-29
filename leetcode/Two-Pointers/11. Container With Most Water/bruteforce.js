/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let left = 0; left < height.length; left++) {
    const verticalLineLeft = height[left];
    for (let right = left + 1; right < height.length; right++) {
      const verticalLineRight = height[right];
      const h = Math.min(verticalLineLeft, verticalLineRight);
      const w = right - left;
      const area = h * w;
      max = Math.max(max, area);
    }
  }
  return max;
};
