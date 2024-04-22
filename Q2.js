function calculateElectricityBill(consumption) {
    let billAmount = 0;

    if (consumption <= 100) {
        billAmount = consumption * 0.1; // $0.1 per unit
    } else if (consumption <= 200) {
        billAmount = 100 * 0.1 + (consumption - 100) * 0.15; // $0.15 per unit
    } else if (consumption <= 300) {
        billAmount = 100 * 0.1 + 100 * 0.15 + (consumption - 200) * 0.2; // $0.2 per unit
    } else {
        billAmount = 100 * 0.1 + 100 * 0.15 + 100 * 0.2 + (consumption - 300) * 0.25; // $0.25 per unit
    }

    return billAmount;
}

const consumption = parseFloat(prompt("Enter your monthly electricity consumption (in kilowatt-hours):"));

if (!isNaN(consumption) && consumption >= 0) {
    const bill = calculateElectricityBill(consumption);
    console.log(`Your monthly electricity consumption is ${consumption} kWh, and your electricity bill is $${bill.toFixed(2)}.`);
} else {
    console.log("Invalid input. Please enter a valid monthly electricity consumption.");
}

