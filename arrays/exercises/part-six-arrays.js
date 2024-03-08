//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ["Hydrogen", "H", 1.008];
let element2 = ["Helium", "He", 4.0026];
let element26 = ["Iron", "Fe", 55.845];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];
table.push(element1);
table.push(element2);
table.push(element26);

console.log(table)
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[0]); 
console.log(table[0][1]);
//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log("Mass of element1:", table[0][2]);
console.log("Name for element2:", table[1][0]);
console.log("Symbol for element26:", table[2][1]);
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let threeDimensionalArray = [
    [
      ["Value1", "Value2", "Value3"],
      ["Value4", "Value5", "Value6"]
    ],
    [
      ["Value7", "Value8", "Value9"],
      ["Value10", "Value11", "Value12"]
    ]
  ];
  
  console.log("Entry from the first level:", threeDimensionalArray[0]);
  console.log("Entry from the second level:", threeDimensionalArray[0][1]);
  console.log("Entry from the third level:", threeDimensionalArray[0][1][2]);