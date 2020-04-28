export const dayOfWeek = (date, days) => {
  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "St", "Su"];
  const dateInFuture = new Date(date).setDate(new Date(date).getDate() + days);
  return weekDays[new Date(dateInFuture).getDay()];
};


