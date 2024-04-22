function calculateTax(income) {
    let taxAmount = 0;

    if (income <= 10000) {
        taxAmount = income * 0.05; // 5% tax rate
    } else if (income <= 50000) {
        taxAmount = 10000 * 0.05 + (income - 10000) * 0.1; // 10% tax rate
    } else if (income <= 100000) {
        taxAmount = 10000 * 0.05 + 40000 * 0.1 + (income - 50000) * 0.15; // 15% tax rate
    } else {
        taxAmount = 10000 * 0.05 + 40000 * 0.1 + 50000 * 0.15 + (income - 100000) * 0.2; // 20% tax rate
    }

    return taxAmount;
}

const income = parseFloat(prompt("Enter your yearly income:"));

if (!isNaN(income) && income >= 0) {
    const tax = calculateTax(income);
    console.log(`Your yearly income is $${income.toFixed(2)}, and your tax amount is $${tax.toFixed(2)}.`);
} else {
    console.log("Invalid input. Please enter a valid yearly income.");
}
