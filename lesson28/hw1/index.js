export const shmoment = (date) => {
  let newDate = date;

  const changer = {
    add(timeUnits, value) {
      if (timeUnits == "years") {
        newDate = new Date(date).setFullYear(
          new Date(date).getFullYear() + value
        );
        return this;
      }

      if (timeUnits == "month") {
        newDate = new Date(date).setMonth(new Date(date).getMonth() + value);
        return this;
      }

      if (timeUnits == "days") {
        newDate = new Date(date).setDate(new Date(date).getDate() + value);
        return this;
      }

      if (timeUnits == "hours") {
        newDate = new Date(date).setHours(new Date(date).getHours() + value);
        return this;
      }

      if (timeUnits == "minutes") {
        newDate = new Date(date).setMinutes(
          new Date(date).getMinutes() + value
        );
        return this;
      }

      if (timeUnits == "seconds") {
        newDate = new Date(date).setSeconds(
          new Date(date).getSeconds() + value
        );
        return this;
      }

      if (timeUnits == "milliseconds") {
        newDate = new Date(date).setMilliseconds(
          new Date(date).getMilliseconds() + value
        );
        return this;
      }
    },

    subtract(timeUnits, value) {
      if (timeUnits == "years") {
        newDate = new Date(date).setFullYear(
          new Date(date).getFullYear() - value
        );
        return this;
      }

      if (timeUnits == "month") {
        newDate = new Date(date).setMonth(new Date(date).getMonth() - value);
        return this;
      }

      if (timeUnits == "days") {
        newDate = new Date(date).setDate(new Date(date).getDate() - value);
        return this;
      }

      if (timeUnits == "hours") {
        newDate = new Date(date).setHours(new Date(date).getHours() - value);
        return this;
      }

      if (timeUnits == "minutes") {
        newDate = new Date(date).setMinutes(
          new Date(date).getMinutes() - value
        );
        return this;
      }

      if (timeUnits == "seconds") {
        newDate = new Date(date).setSeconds(
          new Date(date).getSeconds() - value
        );
        return this;
      }

      if (timeUnits == "milliseconds") {
        newDate = new Date(date).setMilliseconds(
          new Date(date).getMilliseconds() - value
        );
        return this;
      }
    },

    result() {
      return newDate;
    },
  };

  return changer;
};

console.log(new Date(shmoment(new Date()).subtract("years", 1).add("years", 10).result()));
