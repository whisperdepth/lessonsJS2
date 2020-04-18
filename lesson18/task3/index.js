export function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => acc + elem, 0);
}
console.log(sumOfSquares(3, 5));