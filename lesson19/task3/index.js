export default {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(str) {
    this.firstName = str.split(" ")[0];
    this.lastName = str.split(" ")[1];
  },
};
