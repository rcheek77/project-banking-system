class BankAccount {
    constructor(accNumber, customer, balance=0, status) {
        this.accNumber=accNumber;
        this.customer=customer;
        this.balance=balance;
        this.status=status;
    }

deposit(amount) {
        this.balance += amount;
        console.log(`£${amount} deposited. New balance: £${this.balance}`);
    }

withdraw(amount) {
    if (amount < this.balance) {
        this.balance -= amount;
        console.log(`£${amount} withdrawn. Current balance: £${this.balance}`);
            
        } else {
            console.log("Insufficient funds");
        }
    }

checkBalance() {
    console.log(`Account balance for ${this.customer}: £${this.balance}`);
}

}


const account1 = new BankAccount(123456, 'John Doe', 25);
const account2 = new BankAccount(789012, 'Jane Smith', 1000);

account1.deposit(5000);
account2.deposit(250);

account1.withdraw(700);
account2.withdraw(300);

account1.checkBalance();
account2.checkBalance();

// export defualt BankAccount;