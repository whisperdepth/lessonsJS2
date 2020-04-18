export function getOwnProps(obj) {
  let arr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(prop);
    }
  }
  return arr;
}

const user = {
  name: "Tom",
  age: 27,
  sayHi() {
    console.log("hi");
  },
};

let result = getOwnProps(user);
console.log(result);
