function printMessage(age, city) {
  console.log(
    `Hello ${this.firstName}, email ${this.email}, age: ${age}, city: ${city}`
  );
}
let user = {
  firstName: "Alex",
  email: "gmail.com",
};

function bind(func, context, ...bindArgs) {
  return function (...funcArgs) {
    let copy = Object.assign({}, context);
    copy.tempFunction = func;
   return copy.tempFunction(...bindArgs, ...funcArgs);
  };
}
bind(printMessage, user)(30, "Kiev");
/* bind(printMessage, user, 30)("Kiev");
bind(printMessage, user, 30, "Kiev")();
 */