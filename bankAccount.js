// Selected DOM Elements
const dashboard = document.getElementById('dashboard');
const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const balance = document.getElementById('balance');
const depositInput = document.getElementById('deposit-input');
const withdrawInput = document.getElementById('withdraw-input');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');


// Deposit Event Handler
depositBtn.addEventListener('click', () => {            // add event listener to click of deposit button
    const value = depositInput.value;                   // const value is now value of depositInput. See line 6 above, line 43 in index
    const amount = Number(value);                       // convert above into primitive number (Number = built in function)

    // Validation: Check if empty, not a number, or less than/equal to zero
    if (value.trim() === "" || isNaN(amount) || amount <= 0) {          // check if trimmed value (trimmed of white space) is empty, or
                                                                        // is not a number, or is less than or equal to 0
        alert("Please enter a valid positive number to deposit.");      // if any of the above are true, display alert
        depositInput.value = '';                                        // and return depositInput value to empty string
        return;                                                         // come out of loop (return)
    }

    const depositValue = Number(deposit.innerText) + amount;    // grabs the existing text inside the deposit box, converts to a number,
                                                                // adds new amount (above) to it and stores in depositValue
    const balanceValue = Number(balance.innerText) + amount;    // grabs existing text in balance box, converts to a number, adds
                                                                // new amount (above) to it and stores in balanceValue
    
    deposit.innerText = depositValue;                           // update DOM with value above
    balance.innerText = balanceValue;                           // update DOM with value above
    depositInput.value = '';                                    // reassign deposit box to empty string
});

// Withdraw Event Handler
withdrawBtn.addEventListener('click', () => {               // add event listener to click of withdraw button
    const value = withdrawInput.value;                      // retrieves whatever text the user typed inside the withdrawal text box and saves it in value
    const amount = Number(value);                           // converts it to a numebr and stores in 'amount'

    // Validation: Check if input is empty, not a number, or less than/equal to zero
    if (value.trim() === "" || isNaN(amount) || amount <= 0) {          // if trimmed value = empty, not a number or less or equal to 0,
        alert("Please enter a valid positive number to withdraw.");     // display this alert
        withdrawInput.value = '';                                       // update withdrawInput box text to empty string
        return;                                                         // exit loop
    }

    const currentBalance = Number(balance.innerText);               // grabs the current text inside the balance display box, converts it to a number, 
                                                                    // and saves it in currentBalance to check available funds

    // Check if the account has enough money
    if (amount > currentBalance) {                                  // if aount (to withdraw) is more than current balance, 
        alert("You don't have that much balance to withdraw.");     // display this alert
        withdrawInput.value = '';                                   // and set withdrawInput text back to empty string
    } else {                                                        // otherwise:
        const balanceValue = currentBalance - amount;               // deduct withdrawal 'amount' from the current balance and save in balanceValue
        const withdrawValue = Number(withdraw.innerText) + amount;  // grabs the total amount previously withdrawn, turns it into a number, 
                                                                    // adds the new amount to it, and saves it in withdrawValue
        
        withdraw.innerText = withdrawValue;                     // updates the webpage DOM to show the new, higher total withdrawal amount
        balance.innerText = balanceValue;                       // updates the webpage DOM to show the new, lowered overall account balance
        withdrawInput.value = '';                               // clears input field
    }
});