// Let’s break the code down into smaller chunks.
// Now consider the second if/else block. 
// Add another console.log(launchReady) after this block and run the program.

// Given the values for crewStatus and computerStatus, should launchReady be true or false after the check?  
// Is the program behaving as expected?

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (crewStatus && computerStatus === 'green') {
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log(launchReady);
