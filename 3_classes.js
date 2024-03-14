// function BankAccount (customerName,balance=0){
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;

//     this.deposit = function(amount){
//         this.balance += amount
//     }
//     this.withdraw = function(amount){
//         this.balance -= amount
//     }
//     }

class BankAccount { 
    // name class
  customerName;
  accountNumber = Date.now();
  balance;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

const asimAcc = new BankAccount('asim', 2000)
asimAcc.deposit(100)

console.log(asimAcc);