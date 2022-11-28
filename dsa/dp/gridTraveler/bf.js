export const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0; // 1 row or 1 column
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};
