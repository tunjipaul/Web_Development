function atm(balance, action, amount) {
    if (action === "withdraw") {
        if (amount > 500) {
            console.log(`You cannot withdraw more than 500 at once.`);
        }
        if (balance >= amount) {
            balance -= amount;
            return `Withdrawal successful. New balance: $${balance}`;
        } else {
            return `Insufficient Funds, Available Balance: $${balance}`;
        }
    } else if (action === "deposit") {
        balance += amount;
        return `Transfer Successful, New Balance: $${balance}`;
    } else {
        return `Invalid Code`;
    }
}