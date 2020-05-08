export const shmoment = (date) => {
  const changer = {
    add(timeUnits, value) {
      if (timeUnits == "years") {
        const newDate = new Date(date).setFullYear(
          new Date(date).getFullYear() + value
        );
        return newDate;
      }

      if (timeUnits == "month") {
        const newDate = new Date(date).setMonth(
          new Date(date).getMonth() + value
        );
        return newDate;
      }

      if (timeUnits == "days") {
        const newDate = new Date(date).setDate(
          new Date(date).getDate() + value
        );
        return newDate;
      }

      if (timeUnits == "hours") {
        const newDate = new Date(date).setHours(
          new Date(date).getHours() + value
        );
        return newDate;
      }

      if (timeUnits == "minutes") {
        const newDate = new Date(date).setMinutes(
          new Date(date).getMinutes() + value
        );
        return newDate;
      }

      if (timeUnits == "seconds") {
        const newDate = new Date(date).setSeconds(
          new Date(date).getSeconds() + value
        );
        return newDate;
      }

      if (timeUnits == "milliseconds") {
        const newDate = new Date(date).setMilliseconds(
          new Date(date).getMilliseconds() + value
        );
        return newDate;
      }
    },

    subtract(timeUnits, value) {
      if (timeUnits == "years") {
        const newDate = new Date(date).setFullYear(
          new Date(date).getFullYear() - value
        );
        return newDate;
      }

      if (timeUnits == "month") {
        const newDate = new Date(date).setMonth(
          new Date(date).getMonth() - value
        );
        return newDate;
      }

      if (timeUnits == "days") {
        const newDate = new Date(date).setDate(
          new Date(date).getDate() - value
        );
        return newDate;
      }

      if (timeUnits == "hours") {
        const newDate = new Date(date).setHours(
          new Date(date).getHours() - value
        );
        return newDate;
      }

      if (timeUnits == "minutes") {
        const newDate = new Date(date).setMinutes(
          new Date(date).getMinutes() - value
        );
        return newDate;
      }

      if (timeUnits == "seconds") {
        const newDate = new Date(date).setSeconds(
          new Date(date).getSeconds() - value
        );
        return newDate;
      }

      if (timeUnits == "milliseconds") {
        const newDate = new Date(date).setMilliseconds(
          new Date(date).getMilliseconds() - value
        );
        return newDate;
      }
    },
  };

  return changer;
};

console.log( new Date(shmoment(new Date()).subtract("years", 1)));