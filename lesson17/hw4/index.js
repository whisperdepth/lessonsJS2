let user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  /*  setFullName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }, */

  setFullName(fullName) {
    this.firstName = fullName.split(" ")[0];
    this.lastName = fullName.split(" ")[1];
  },
};

/* console.log(user.getFullName());
user.setFullName("Tom Sayer");
console.log(user.getFullName());*/
