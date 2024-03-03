let names = Array();
console.log(names.length); // empty array

let names2 = [];
console.log(names2.length); // empty array

let names3 = ["John", "James", "Jill"];
console.log(names3);
names3[0] = "Serdar";
console.log(names3); // ["Serdar", "James", "Jill"]

let fruits = [,,,]; // empty array with 3 empty items
console.log(fruits.length); // 3

let fruits2 = Array(3); // empty array with 3 empty items
console.log(fruits2.length); // 3

let months = ["January", "February", "March", "April", "May", "June", "July"];
console.log(months.indexOf("June")); // 5
console.log(months.indexOf("December")); // -1

let array = Array();
array.push('Serdar');
console.log(array);