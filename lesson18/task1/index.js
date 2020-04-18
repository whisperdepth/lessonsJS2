export const event = {
  guests: [{ name: "John", age: 18, email: "example@server.com" }],
  message: "Welcome to the party!",
  getInvitations() {
    return this.guests
      .filter(({ age }) => age > 17)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};
