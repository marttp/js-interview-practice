export const gridTraveler = (m, n, memo = {}) => {
  const key = key(m, n);
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0; // 1 row or 1 column
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

const key = (m, n) => `${m}:${n}`;

/**
  Time: O(m * n)
  Space: O(m + n)
*/