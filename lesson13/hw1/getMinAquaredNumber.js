export default (numbers) => {
  if (!Array.isArray(numbers) || numbers.length == 0) return null;
  let min = Math.min(...numbers.map((num) => Math.abs(num)));
  let minSqured = min * min;
  return minSqured;
};


