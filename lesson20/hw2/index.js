export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(arr) {
    this._users = [];
    this._users.push(...arr);
    Object.freeze(this._users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((user) => user._name);
  }
  getUserIds() {
    return this._users.map((user) => user._id);
  }
  /* getUserNameById(id) {
    this._users.forEach((user) => {
      if (user._id == id) {
        console.log(user._name);
        return user._name;
      }
    });
  } */

  getUserNameById(id) {
    return this._users.filter((user) => user._id == id);
  }
}

let user1 = new User(1, "Tom", 34);

let user2 = new User(2, "Bob", 35);

let arr = [];
arr.push(user1, user2);

let userRep = new UserRepository(arr);

console.log(userRep._users);

console.log(userRep.getUserNames());

console.log(userRep.getUserIds());

console.log(userRep.getUserNameById(1));
