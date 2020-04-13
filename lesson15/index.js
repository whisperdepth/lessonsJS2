export function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}
