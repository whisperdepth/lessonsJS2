export const delay = (num) => {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, num);
  });
  return p;
 
};

