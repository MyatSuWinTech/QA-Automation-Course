// 1st Method

class 


// 2nd Method

class CapitalOneBankAccount {
  #balance; // private field

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }

  setbalance() {
    if (amount >= 0) {
      this.#balance = amount;
    } else {
      console.log("Balance cannot be negative!");
    }
  }
}
const account = new CapitalOneBankAccount("Alice", 500);
console.log(account.balance);
