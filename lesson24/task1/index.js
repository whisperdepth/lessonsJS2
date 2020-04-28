export const dayOfWeek = (date, days) => {
  const weekDays = [ "Su", "Mo", "Tu", "We", "Th", "Fr", "St"];
  const dateInFuture = new Date(date).setDate(new Date(date).getDate() + days);
  return weekDays[new Date(dateInFuture).getDay()];
};

const result = dayOfWeek(new Date(2019, 0, 1), 14);
console.log(result);
