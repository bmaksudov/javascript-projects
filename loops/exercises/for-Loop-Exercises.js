// Exercise #1
console.log("Exercise #1:");

// a. Print the numbers 0 - 20, one number per line.
console.log("a.");
for (let i = 0; i <= 20; i++) {
    console.log(i);
}

// b. Print only the ODD values from 3 - 29, one number per line.
console.log("b.");
for (let i = 3; i <= 29; i += 2) {
    console.log(i);
}

// c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
console.log("c.");
for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}

// d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3.
console.log("d.");
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Exercise #2
console.log("\nExercise #2:");

// Initialize variables
let str = "LaunchCode";
let arr = [1, 5, 'LC101', 'blue', 42];

// a. Print each element of the array to a new line.
console.log("a.");
for (let element of arr) {
    console.log(element);
}

// b. Print each character of the string - in reverse order - to a new line.
console.log("b.");
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}

// Exercise #3
console.log("\nExercise #3:");

// Initialize array
let numbersArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

// a. One array contains the even numbers, and the other holds the odds.
let evenArray = [];
let oddArray = [];

for (let number of numbersArray) {
    if (number % 2 === 0) {
        evenArray.push(number);
    } else {
        oddArray.push(number);
    }
}

// b. Print the arrays to confirm the results.
console.log("Even Numbers:", evenArray);
console.log("Odd Numbers:", oddArray);
