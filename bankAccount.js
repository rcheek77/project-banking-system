export default class BankAccount {                  // define JS class named BankAccount, exportable
    #balance;                       // property for bank balance. The '#' means it cannot ba changed/accessed from outside this class
    #depositTotal;                  // property for total of deposits
    #withdrawTotal;                 // property for total of withdrawals

    constructor(initialBalance = 100) {                 // constructor method. Default balance = £100
        this.#balance = this.#round(initialBalance);    // rounds the starting balance to 2 decimal places and assigns it 
                                                        // to the private #balance property
        this.#depositTotal = 0;                         // initializes the private deposit tracker to 0
        this.#withdrawTotal = 0;                        // initializes the private withdrawal tracker to 0
    }

    #round(value) {         // round helper method
        return Math.round((value + Number.EPSILON) * 100) / 100;    //nuilt in JS property - rounds value to 2 dp
    }

    deposit(amount) {                               // method called deposit that accepts amount as a parameter
        if (isNaN(amount) || amount <= 0) {         // check: if amount is not a number (isNaN) or less thans or equal to 0, 
            return { success: false, message: "Please enter a valid positive number." };    // return error message
        }
        
        this.#depositTotal = this.#round(this.#depositTotal + amount);  // adds the deposit amount to the total deposits tracker and rounds the result
        this.#balance = this.#round(this.#balance + amount); // adds the deposit amount to the current account balance and rounds the result
        return { success: true }; // returns a success object to confirm the transaction worked
    }

    withdraw(amount) { // public method (withdraw) that accepts an amount parameter
        if (isNaN(amount) || amount <= 0) { // check: if amount is not a number (isNaN) or less thans or equal to 0, 
            return { success: false, message: "Please enter a valid positive number." }; // if true, it stops execution and returns 
                                                                                         // a failure object with an error message
        }
        if (amount > this.#balance) {       // if amount (to be withdrawn) is > the balance available,
            return { success: false, message: "You have insufficient funds." }; // return this error message
        }
        
        // adds the withdrawal amount to the total withdrawals tracker and rounds the result
        this.#withdrawTotal = this.#round(this.#withdrawTotal + amount);

        // subtracts the withdrawal amount from the current balance and rounds the result
        this.#balance = this.#round(this.#balance - amount);

        // returns a success object to confirm the transaction worked
        return { success: true };
    }

    // Getter methods:
    get balance() { return this.#balance; }                 // get value of balance
    get depositTotal() { return this.#depositTotal; }       // get value of deposits total
    get withdrawTotal() { return this.#withdrawTotal; }     // get value of withdrawls total
}
