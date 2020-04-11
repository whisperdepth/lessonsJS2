export const getSum = (from, to) => {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    if (i % 2 == 0) sum += i;
  }
  return sum;
};

export const increaser = (a, index) => {
  if (a > index) a += index;
  return a;
};

export const compareSums = (a, b, c, d) => {
  if (sum(a, b) > sum(c, d)) return true;
  return false;
};

const sum = (x, y) => {
  let result = 0;
  for (let i = x; i <= y; i++) {
    result += i;
  }
  return result;
};
