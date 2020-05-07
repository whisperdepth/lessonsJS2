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

