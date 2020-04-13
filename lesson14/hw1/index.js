let memo = 0;

export const add = (num) => (memo += num);
export const decrease = (num) => (memo -= num);
export const reset = () => (memo = 0);
export const getMemo = () => memo;
