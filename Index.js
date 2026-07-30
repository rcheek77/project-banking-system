import BankAccount from './bankAccount.js';                     // import BankAccount class from bankAccount.js

// consts to get relevant DOM items
const depositDisplay = document.getElementById('deposit');
const withdrawDisplay = document.getElementById('withdraw');
const balanceDisplay = document.getElementById('balance');

const depositInput = document.getElementById('deposit-input');
const withdrawInput = document.getElementById('withdraw-input');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');

const dashboardAccount = new BankAccount(100); // creates a new, live instance of the BankAccount class and starts it with an initial balance of £100

// function for updating text on the screen
function updateDashboardUI() {
    depositDisplay.textContent = dashboardAccount.depositTotal.toFixed(2);  // takes the total deposits number from the account object (2dp)
                                                                            // and pushes it into the deposit text display
    withdrawDisplay.textContent = dashboardAccount.withdrawTotal.toFixed(2); // Takes the total withdrawals number (2dp) and pushes it into the 
                                                                             // withdrawal text display
    balanceDisplay.textContent = dashboardAccount.balance.toFixed(2);  // Takes the current net balance number(2dp )and 
                                                                       // pushes it into the balance text display
}

depositBtn.addEventListener('click', () => {            // event listener (for mouse click) - on deposit button
    const amount = Number(depositInput.value);          // const to store amount typed into deposit field, convert to real number
    const result = dashboardAccount.deposit(amount); // passes that number into dashboardAccount (above) and saves the outcome 
                                                     // into a variable named result
    
    if (result.success) {                           // check if result successful
        updateDashboardUI();                        // run above function
        depositInput.value = '';                    // reset deposit value to empty string
    } else {                                        // otherwise:
        alert(result.message || "Invalid Action");  // display this alert
    }
});

withdrawBtn.addEventListener('click', () => {           // event listener (for mouse click) - on withdraw button
    const amount = Number(withdrawInput.value);         // const to store amount typed into withdraw field, convert to real number
    const result = dashboardAccount.withdraw(amount);   // passes that number into dashboardAccount (above) and saves the outcome into a variable named result
    
    if (result.success) {                               // check if result successful
        updateDashboardUI();                            // run above function
        withdrawInput.value = '';                       // reset withdraw value to empty string
    } else {                                            // else,
        alert(result.message || "Invalid Action");      // display this alert
    }
});

// Initial load
updateDashboardUI();    // call this function when page loads
