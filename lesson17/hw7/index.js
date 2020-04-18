/* const user = {
  name: "Tom",
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  },
};


export function bind(func, context, [args]) {
  return function () {
    func.apply(context, [args]);
  };
}

const func3 = user.sayHi;

const func4 = bind(func3, user, []);

func4();
func4.apply({ name: "Sam" });
func4.bind({name: "Bob"});
func4();
 */

const bind = function (func, context) {
  let bindArgs = [].slice.call(arguments, 2);
  return function () {
    let funcArgs = [].slice.call(arguments);
    func.apply(context, bindArgs.concat(funcArgs));
  };
};