/* const user = {
    name: "Tom",
    sayHi(){
        console.log(`Hi, I am ${this.name}`);
    }
}

user.sayHi();

const func = user.sayHi.bind(user);

func();

const func2 = user.sayHi;

func2.call(user); */


export function bind (func, context, [args]){
   func.apply(context, [args]);
}
/* 
const func3 = user.sayHi;

bind(func3, user, []); */