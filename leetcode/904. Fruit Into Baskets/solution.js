/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  const baskets = {};
  while (end < fruits.length) {
    const fruitEnd = fruits[end];
    if (!baskets[fruitEnd]) {
      baskets[fruitEnd] = 0;
    }
    baskets[fruitEnd] += 1;
    while (Object.keys(baskets).length > 2) {
      const fruitStart = fruits[start];
      baskets[fruitStart] -= 1;
      if (baskets[fruitStart] === 0) {
        delete baskets[fruitStart];
      }
      start += 1;
    }
    maxLength = Math.max(maxLength, end - start + 1);
    end += 1;
  }
  return maxLength;
};
