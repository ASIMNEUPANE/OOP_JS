// Hide complex machanism (property or method ) from the user
// Interface  provide  simple mechanism to the user


// Inheritance child class will have access to parents ko properties and method

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


class SavingAccount extends BankAccount{
transactionLimit = 5000;
constructor(customerName, balance=0){
    super(customerName,balance)
    // this is called constructor linking
}
takePersonalLoan(amount){
    console.log('you are taking a loan ' + amount)
}
}

const asimAcc = new SavingAccount('asim', 100)
asimAcc.balance= 'hjasd'
console.log(asimAcc)

