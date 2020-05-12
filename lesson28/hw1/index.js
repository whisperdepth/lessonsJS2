export const shmoment = (date) => {
  let newDate = new Date(date);

  const changer = {
      
    add(timeUnits, value) {
      if (timeUnits == "years") {
        newDate = new Date(newDate).setFullYear(
          new Date(newDate).getFullYear() + value
        );
        return this;
      }

      if (timeUnits == "months") {
        newDate = new Date(newDate).setMonth(
          new Date(newDate).getMonth() + value
        );
        return this;
      }

      if (timeUnits == "days") {
        newDate = new Date(newDate).setDate(
          new Date(newDate).getDate() + value
        );
        return this;
      }

      if (timeUnits == "hours") {
        newDate = new Date(newDate).setHours(
          new Date(newDate).getHours() + value
        );
        return this;
      }

      if (timeUnits == "minutes") {
        newDate = new Date(newDate).setMinutes(
          new Date(newDate).getMinutes() + value
        );
        return this;
      }

      if (timeUnits == "seconds") {
        newDate = new Date(newDate).setSeconds(
          new Date(newDate).getSeconds() + value
        );
        return this;
      }

      if (timeUnits == "milliseconds") {
        newDate = new Date(newDate).setMilliseconds(
          new Date(newDate).getMilliseconds() + value
        );
        return this;
      }
    },

    subtract(timeUnits, value) {
      if (timeUnits == "years") {
        newDate = new Date(newDate).setFullYear(
          new Date(newDate).getFullYear() - value
        );
        return this;
      }

      if (timeUnits == "months") {
        newDate = new Date(newDate).setMonth(
          new Date(newDate).getMonth() - value
        );
        return this;
      }

      if (timeUnits == "days") {
        newDate = new Date(newDate).setDate(
          new Date(newDate).getDate() - value
        );
        return this;
      }

      if (timeUnits == "hours") {
        newDate = new Date(newDate).setHours(
          new Date(newDate).getHours() - value
        );
        return this;
      }

      if (timeUnits == "minutes") {
        newDate = new Date(newDate).setMinutes(
          new Date(newDate).getMinutes() - value
        );
        return this;
      }

      if (timeUnits == "seconds") {
        newDate = new Date(newDate).setSeconds(
          new Date(newDate).getSeconds() - value
        );
        return this;
      }

      if (timeUnits == "milliseconds") {
        newDate = new Date(newDate).setMilliseconds(
          new Date(newDate).getMilliseconds() - value
        );
        return this;
      }
    },

    result() {
      return new Date(newDate);
    },
  };

  return changer;
};

console.log(
  shmoment(new Date()).subtract("years", 10).add("years", 2).result()
);



const getMethodsNames = {
  years: "getFullYear",
  months: "getMonth",
  days: "getDate",
  hours: "getHours",
  minutes: "getMinutes",
  seconds: "getSeconds",
  milliseconds: "getMilliseconds",
};
const setMethodsNames = {
  years: "setFullYear",
  months: "setMonth",
  days: "setDate",
  hours: "setHours",
  minutes: "setMinutes",
  seconds: "setSeconds",
  milliseconds: "setMilliseconds",
};
export const shmoment = (date) => {
  let result = new Date(date);
  const calculator = {
    add(units, value) {
      const currentUnitValue = result[getMethodsNames[units]]();
      result = new Date(
        result[setMethodsNames[units]](currentUnitValue + value)
      );
      return this;
    },
    subtract(units, value) {
      return this.add(units, -value);
    },
    result() {
      return result;
    },
  };
  return calculator;
};