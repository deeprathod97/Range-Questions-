
    let era = "18";

    if (year < 0) {
        era = "Ancient";
    } else if (year >= 1 && year <= 1500) {
        era = "Medieval";
    } else if (year >= 1501 && year <= currentYear) {
        era = "Modern";
    } else {
        era = "Future";
    }

    return era;


const inputYear = parseInt(prompt("Enter a year:"));

if (!isNaN(inputYear)) {
    const classification = classifyYear(inputYear);
    console.log(`The year ${inputYear} is classified as ${classification}.`);
} else {
    console.log("Invalid input. Please enter a valid year.");
}
