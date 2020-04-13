export function createCalculator () => {
    let memo = 0;

 const add = (num) => (memo += num);
 const decrease = (num) => (memo -= num);
 const reset = () => (memo = 0);
 const getMemo = () => memo;
 return {
     add,
     decrease,
     reset,
     getMemo,
 }
}