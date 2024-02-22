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

// Long Literal Strings
let longString2 = "This is a very long string which needs to wrap across multiple lines because \
otherwise my code is too long.";

// Template Literals
let longString = `This is a very long string which needs to wrap across multiple lines because 
otherwise my code is too long.`;

let name = "serdar";
let lastName = "firlayis";
let fullName = `${name} ${lastName}`; // serdar firlayis

/* Everything is an Object in JavaScript. 
A string is a primitive type that means we can not modify it once it is created. */