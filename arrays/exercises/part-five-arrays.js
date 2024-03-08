let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
let strArray = str.split(' ');
console.log('Result of split:', strArray);
console.log('Original string:', str); // Original string unchanged
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
let arrString = arr.join('-');
console.log('Result of join:', arrString);
console.log('Original array:', arr); // Original array unchanged
//3) Do split or join change the original string/array?
// Answer: No, split and join do not change the original string/array.
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let sortedCargoHold = cargoHold.split(',').sort().join(',');
console.log('Alphabetized cargoHold:', sortedCargoHold);