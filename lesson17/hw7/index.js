/* const user = {
  name: "Tom",
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  },
}; */


export function bind(func, context, [args]) {
  return function () {
    func.apply(context, [args]);
  };
}

/* const func3 = user.sayHi;

const func4 = bind(func3, user, []);

func4();
func4.apply({ name: "Sam" });
func4.bind({name: "Tom"});
func4(); */