export const dayOfWeek = (date, days) => {
  const week = ["Mo", "Tu", "We", "Th", "Fr", "St", "Su"];
  const dateInFuture = new Date(date).setDate(new Date(date).getDate() + days);
  return week[new Date(dateInFuture).getDay()];
};
