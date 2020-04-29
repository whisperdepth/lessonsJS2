export const getDiff = (startDate, endDate) => {
    const difference = Math.abs(startDate - endDate);
    const days = difference / 864e5;
    const daysRounded = Math.floor(days);
    const hours = (days - daysRounded) * 24;
    const hoursRounded = Math.floor(hours);
    const minutes = (hours - hoursRounded) * 60;
    const minutesRounded = Math.floor(minutes);
    const seconds = (minutes - minutesRounded) * 60;
    const secondsRounded = Math.round(seconds);

    const result = `${daysRounded}d ${hoursRounded}h ${minutesRounded}m ${secondsRounded}s`;
    return result;

}

/* let startDate = new Date(2020, 4, 14, 13, 45, 4);
let endDate = new Date(2020, 5, 15, 16, 40, 12);

console.log(getDiff(startDate, endDate)); */