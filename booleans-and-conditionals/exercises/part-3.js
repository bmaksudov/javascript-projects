let engineIndicatorLight = 'red blinking';
let fuelLevel = 21000;
let engineTemperature = 1200;

// 5) Implement the following checks using if/else if/else statements:

// 5a
if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
} 
// 5b
else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
} 
// 5c
else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log("Fuel level above 25%. Engines good.");
} 
// 5d
else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
} 
// 5e
else if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === 'red blinking') {
    console.log("ENGINE FAILURE IMMINENT!");
} 
// 5f
else {
    console.log("Fuel and engine status pending...");
}

// 6) a) Create the variable commandOverride, and set it to be true or false.
let commandOverride = true;

// 6) b) Code the following if/else check:
if ((fuelLevel > 20000 && engineIndicatorLight !== 'red blinking') || commandOverride) {
    console.log("Cleared to launch!");
} else {
    console.log("Launch scrubbed!");
}
