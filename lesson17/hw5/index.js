export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    setInterval(() => {
      this.secondsPassed += 5;
      if (this.secondsPassed == 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 100);
  },

  getTime() {
    if (this.secondsPassed > 9)
      return `${this.minsPassed}:${this.secondsPassed}`;
    return `${this.minsPassed}:0${this.secondsPassed}`;
  },

  stopTimer(n) {
    setTimeout(() => clearInterval(this.startTimer), n);
  },
};

timer.startTimer();
timer.stopTimer(1000);
setTimeout(() => console.log(timer.getTime()), 2000);
