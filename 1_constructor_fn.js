// Goal constructor fn ,How to create Object using constructor

function BankAccount (customerName,balance=0){
this.customerName = customerName;
this.accountNumber = Date.now();
this.balance = balance;

this.deposit = function(amount){
    this.balance += amount
}
this.withdraw = function(amount){
    this.balance -= amount
}
}

const asimAcc = new BankAccount('asim neupane', 1000)
asimAcc.deposit(1000)
console.log(asimAcc)
