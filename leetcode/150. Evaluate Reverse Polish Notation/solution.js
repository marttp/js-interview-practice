/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const operatorMap = {
    '+': (op1, op2) => op1 + op2,
    '-': (op1, op2) => op1 - op2,
    '*': (op1, op2) => op1 * op2,
    '/': (op1, op2) => Math.trunc(op1 / op2),
  };
  for (const t of tokens) {
    if (t in operatorMap) {
      const op2 = stack.pop();
      const op1 = stack.pop();
      const result = operatorMap[t](+op1, +op2);
      stack.push(result);
    } else {
      stack.push(+t);
    }
  }
  return stack[0];
};
