/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const n = temperatures.length;
  const answer = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const currentTemperature = temperatures[i];
    while (
      stack.length !== 0 &&
      currentTemperature > temperatures[stack[stack.length - 1]]
    ) {
      const index = stack.pop();
      answer[index] = i - index;
    }
    stack.push(i);
  }
  return answer;
};
