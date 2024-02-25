let name;
console.log(name); // undefined

// == vs ===
// == checks for equality of value
// === checks for equality of value and data type

5 == "5"; // true
5 === "5"; // false

// Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";

// Window Methods - alert, prompt, confirm
alert("Hello World");
prompt("What is your name?", "John Doe"); // message, default value

let result = prompt("Give me a number");
console.log("number: ", result);

let isDeleted = confirm("Are you sure?");
console.log(isDeleted ? "Yes, deleted" : "No, not deleted");
