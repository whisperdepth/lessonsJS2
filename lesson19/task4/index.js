export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  if (age < 0) return false;
  this.age = age;
  if (age > 24) this.requestNewPhoto();
  return age;
};

const user = new User("Tom", "20");

user.sayHi();
user.requestNewPhoto();

console.log(user.setAge(26));