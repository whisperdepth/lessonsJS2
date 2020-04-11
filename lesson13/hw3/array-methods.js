export const squareArray = (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.map((n) => n * n);
};

export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.slice().reverse();
};

export const increaseEvenEl = (numbers, delta) => {
  if (!Array.isArray(numbers)) return null;

  return numbers.map((num) => {
    if (num % 2 === 0) return (num = num + delta);
    return num;
  });
};

export const cloneArr = (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.slice();
};
