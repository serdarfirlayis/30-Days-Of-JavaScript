function sayHello() {
    console.log("Hello");
}

sayHello();

// If a function has not return statement, it returns undefined
let hello = sayHello();
console.log(hello); // undefined

function sum1() {
    let total = 0;
    for (let number of arguments) {
        total += number;
    }
    return total;
}

sum1(1, 2, 3, 4, 5); // 15

// if you don't know how many arguments you will pass to a function, you can use the rest parameter
function sum2(...args) {
    let result = 0;
    for (let arg of args) {
        result += arg;
    }
    return result;
}

// annonymous function
const annonymous = function (name) {
    console.log(`Hi ${name}, This is an annonymous function`);
}
console.log(annonymous("Serdar"));

// expression function
const square = function (n) {
    return n * n;
}
console.log(square(5)); // 25

// Self-invoking function
(function () {
    console.log("I will invoke myself");
})("WoW");

// arrow function
const factorial = n => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

const power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 3)); // 8

// arrow function doesn't have arguments object but you can use rest parameter
const sum3 = (arg1, ...args) => {
    console.log(arg1);
    console.log(args);
}
sum3(1, 2, 3, 4, 5); // 1, [2, 3, 4, 5] arg1 is first argument and args is rest of the arguments with an array

// function with default parameters
const name = (name = "Serdar") => {
    console.log(`Hello ${name}`);
}
name(); // Hello Serdar
name("John"); // Hello John