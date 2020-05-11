export const pinger = (num, period) => {
  console.log("Ping");
  const interval = setInterval(() => {
    console.log("Ping");
    num--;

    if (num == 1) clearInterval(interval);
  }, period);
};

pinger(5, 1000);
