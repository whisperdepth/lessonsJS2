const week = ["Mo", "Tu", "We", "Th", "Fr", "St", "Su"];

export const dayOfWeek = (date, days) => {
  const dateInFuture = new Date(date).setDate(new Date(date).getDate() + days);
  return week[new Date(dateInFuture).getDay()];
};

const result = dayOfWeek(new Date(2019, 0, 1), 14);
console.log(result);
