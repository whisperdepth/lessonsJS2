const getValueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay("4", 2000);
const asyncNum3 = getValueWithDelay(undefined, 3000);

const getSum = (numbers) =>
  numbers
    .filter((value) => isFinite(value))
    .reduce((acc, num) => acc + +num, 0);

export const asyncSum = (...asyncNumbers) =>
  Promise.all(asyncNumbers)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));

asyncSum(
  asyncNum1,
  Promise.reject(new Error("err")),
  asyncNum3
).then((result) => console.log(result));
