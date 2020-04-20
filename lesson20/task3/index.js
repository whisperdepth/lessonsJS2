export class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.#balance < amount) return console.log("no enough funds");
    this.#balance -= amount;
  }
}
