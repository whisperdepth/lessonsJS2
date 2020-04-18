export const vehicle = {
  name: "Argo",
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

export const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },

  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
    
  },

  __proto__: vehicle,
};
