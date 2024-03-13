// what is prototype ? How is it used? how does it work?
// ANS-Method & Properties shared by all instances of an object

function BankAccount (customerName,balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    
    
    }
    
    const asimAcc = new BankAccount('asim neupane', 1000)
    const rumsanAcc = new BankAccount('asim neupane', 1000)
    
    BankAccount.prototype.deposit = function(amount){
        this.balance += amount
    }
    BankAccount.prototype.withdraw = function(amount){
        this.balance -= amount
    }
    asimAcc.deposit(1000)
    asimAcc.withdraw(100)
    console.log(asimAcc,rumsanAcc)
    
