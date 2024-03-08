// Initialize Variables
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// Verify Conditions for Shuttle Launch
// Verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Condition 1: Total number of astronauts within limit.");
} else {
    console.log("Condition 1 not met. Launch operations aborted.");
}

// Verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Condition 2: All astronauts are ready.");
} else {
    console.log("Condition 2 not met. Launch operations aborted.");
}

// Verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit) {
    console.log("Condition 3: Total mass within limit.");
} else {
    console.log("Condition 3 not met. Launch operations aborted.");
}

// Verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {
    console.log("Condition 4: Fuel temperature within range.");
} else {
    console.log("Condition 4 not met. Launch operations aborted.");
}

// Verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Condition 5: Fuel level at 100%.");
} else {
    console.log("Condition 5 not met. Launch operations aborted.");
}

// Verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Condition 6: Weather status is clear.");
} else {
    console.log("Condition 6 not met. Launch operations aborted.");
}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff) {
    console.log("All conditions met. Shuttle launch can proceed. Wish your astronauts a safe flight!");
} else {
    console.log("Launch operations aborted. Shuttle not prepared for lift-off.");
}
