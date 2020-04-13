let memo = 0;

export const add = (num) => (memo += num);
export const decrease = (num) => (memo -= num);
export const reset = () => (memo = 0);
export const getMemo = () => memo;

function findDivCount(a, b, n) {
  let result = 0;
  for (let i = a; i <= b; i++) {
    if (i % n === 0) {
      result += 1;
    }
  }
  return result;
}
console.log(findDivCount(1, 10, 3));