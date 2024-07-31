// Task 1: Create a constructor function for the Account object
function Account(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = 0;
}

// Task 2: Implement methods within the Account object to deposit and withdraw funds
Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        return `Deposit successful. Your new balance is $${this.balance}.`;
    } else {
        return "Deposit amount must be greater than zero.";
    }
}

Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return `Withdrawal successful. Your new balance is $${this.balance}.`;
    } else {
        return "Withdrawal amount must be greater than zero and no more than your current balance.";
    }
}

// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate
Account.prototype.calculateInterest = function(interestRate, years) {
    // Compound interest formula: A = P(1 + r/n)^(nt)
    // where P is the principal amount (balance), r is the annual interest rate (decimal), 
    // n is the number of times that interest is compounded per year, and t is the number of years the money is invested for.
    let principal = this.balance;
    let rate = interestRate / 100;
    let timesCompounded = 1; // Assuming interest is compounded annually
    let amount = principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
    return `Estimated balance after ${years} years with an interest rate of ${interestRate}%: $${amount.toFixed(2)}.`;
}

// Test the Account object and its methods
let account = new Account('123456', 'John Doe');
console.log(account.deposit(1000));  // Deposit funds
console.log(account.withdraw(200));  // Withdraw funds
console.log(account.calculateInterest(5, 10));  // Calculate compound interest
