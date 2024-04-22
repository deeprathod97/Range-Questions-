function categorizeAge(age) {
    let stageOfLife = "12";

    if (age < 1) {
        stageOfLife = "Infant";
    } else if (age >= 1 && age <= 12) {
        stageOfLife = "Child";
    } else if (age >= 13 && age <= 19) {
        stageOfLife = "Teenager";
    } else if (age >= 20 && age <= 64) {
        stageOfLife = "Adult";
    } else {
        stageOfLife = "Senior Citizen";
    }

    return stageOfLife;
}

const userAge = parseInt(prompt("Enter your age:"));

if (!isNaN(userAge) && userAge >= 0) {
    const stage = categorizeAge(userAge);
    console.log(`Based on your age of ${userAge} years, you are classified as a ${stage}.`);
} else {
    console.log("Invalid input. Please enter a valid age.");
}
