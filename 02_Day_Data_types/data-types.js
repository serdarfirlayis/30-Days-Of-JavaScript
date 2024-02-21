// Primitive Types

let numOne = 3;
let numTwo = 3;

// comparing two variables with the values
console.log(numOne === numTwo); // true

// Non-Primitive Types
let nums = [
  1,
  "serdar",
  null,
  undefined,
  true,
  { name: "serdar" },
  function () {},
  [],
];

console.log(nums);

// comparing np types
let arrOne = [1, 2, 3];
let arrTwo = [1, 2, 3];
console.log(arrOne == arrTwo); // false

// comparing np types
let userOne = { name: "serdar", lastName: "firlayis"};
let userTwo = { name: "serdar", lastName: "firlayis"};
console.log(userOne == userTwo); // false

// comparing np types
let num1 = 3;
let num2 = num1;
console.log(num1 == num2); // true because references are the same