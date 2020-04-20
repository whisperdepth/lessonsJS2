export class Order {
  id = Math.random().toString();
  dateCreated = new Date();
  isConfirmed = false;
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }
  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }
  checkPrice() {
    if (this.price > 1000) return true;
    return false;
  }
  isValidType() {
    if (this.type == "Buy" || this.type == "Sell") return true;
    return false;
  }
}
