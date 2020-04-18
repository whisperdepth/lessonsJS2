function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: "Tom",
  sayHI() {
    console.log(`Hi, I am ${this.name}`);
  },
};

const deferredHi = defer(user.sayHI, 1000);
deferredHi();
