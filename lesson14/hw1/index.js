let memo = 0;

export const add = (num) => (memory += num);
export const decrease = (num) => (memory -= num);
export const reset = () => (memory = 0);
export const getMemo = () => memo;


