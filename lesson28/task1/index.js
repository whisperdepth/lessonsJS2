export const calc = (initValue) => {
  let value = initValue;
  const calculator = {
    add(number) {
      value += number;
      return this;
    },

    mult(number) {
      value *= number;
      return this;
    },

    div(number) {
      value /= number;
      return this;
    },

    subtract(number) {
      value -= number;
      return this;
    },

    result() {
      return value;
    },
  };

  return calculator;
};


const result = calc(3).add(2).div(10).mult(4).subtract(5).result();
console.log(result);
