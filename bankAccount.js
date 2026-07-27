// Selected DOM Elements
const dashboard = document.getElementById('dashboard'),
    deposit = document.getElementById('deposit'),
    withdraw = document.getElementById('withdraw'),
    balance = document.getElementById('balance'),
    depositInput = document.getElementById('deposit-input'),
    withdrawInput = document.getElementById('withdraw-input'),
    depositBtn = document.getElementById('deposit-btn'),
    withdrawBtn = document.getElementById('withdraw-btn'),
    submitBtn = document.getElementById('submit-btn'); // Will be null if using Option B

// Safely handle submit button only if it actually exists in the HTML
if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        const loginSection = document.getElementById('login-section');
        if (loginSection) loginSection.classList.add('d-none');
        dashboard.classList.remove('d-none');
    });
}

// Deposit Event Handler
depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    const amount = Number(value);

    // Validation: Check if empty, not a number, or less than/equal to zero
    if (value.trim() === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive number to deposit.");
        depositInput.value = '';
        return;
    }

    const depositValue = Number(deposit.innerText) + amount;
    const balanceValue = Number(balance.innerText) + amount;
    
    deposit.innerText = depositValue;
    balance.innerText = balanceValue;
    depositInput.value = '';
});

// Withdraw Event Handler
withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value;
    const amount = Number(value);

    // Validation: Check if input is empty, not a number, or less than/equal to zero
    if (value.trim() === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive number to withdraw.");
        withdrawInput.value = '';
        return;
    }

    const currentBalance = Number(balance.innerText);

    // Check if the account has enough money
    if (amount > currentBalance) {
        alert("You don't have that much balance to withdraw.");
        withdrawInput.value = '';
    } else {
        const balanceValue = currentBalance - amount;
        const withdrawValue = Number(withdraw.innerText) + amount;
        
        withdraw.innerText = withdrawValue;
        balance.innerText = balanceValue;
        withdrawInput.value = '';
    }
});
