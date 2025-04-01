// Code your solution here
// Function to find matching drivers (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to find drivers whose names start with given letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Function to match drivers based on name property
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Example usage:
const drivers = ["Alice", "Bob", "Charlie", "alice"];
console.log(findMatching(drivers, "alice")); // ["Alice", "alice"]

console.log(fuzzyMatch(drivers, "Al")); // ["Alice", "alice"]

const driverObjects = [
    { name: "Alice", hometown: "New York" },
    { name: "Bob", hometown: "Los Angeles" },
    { name: "Charlie", hometown: "Chicago" }
];
console.log(matchName(driverObjects, "Alice")); // [{ name: "Alice", hometown: "New York" }]
