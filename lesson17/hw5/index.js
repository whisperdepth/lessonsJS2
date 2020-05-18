export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    this.timerID = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed == 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },

  getTime() {
    if (this.secondsPassed > 9)
      return `${this.minsPassed}:${this.secondsPassed}`;
    return `${this.minsPassed}:0${this.secondsPassed}`;
  },

  stopTimer() {
    clearInterval(this.timerID);
  },

  resetTimer (){
    this.secondsPassed = 0;
    this.minsPassed = 0;
  }
};


/* timer.startTimer();
setTimeout(() => timer.stopTimer(), 1000);
setTimeout(() => console.log(timer.getTime()), 2000); */
