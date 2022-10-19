// operators are symbols that perform operations on variables and values.
// some examples are: +, -, *, /, %, ++, --, +=, -=, *=, /=, %=, ==, ===, !=, !==, >, <, >=, <=, &&, ||, !, ?.

var num1 = 20;
var num2 = 10;

console.log(num1 + num2); // Addition => 30
console.log(num1 - num2); // Subtraction => 10
console.log(num1 * num2); // Multiplication => 200
console.log(num1 / num2); // Division => 2
console.log(num1 % num2); // Mod => 0

// Assignment operators
// They are used to assign values to variables.

var x = 20; // = is the assignment operator.
var y = x;

// Comparison operators
// They are used to compare 2 values.

var myLocation = "Lagos";
var driverXLocation = "London";

// Using the comparison operator to check if the 2 locations are the same.
// is myLocation equal to driverXLocation?

console.log(myLocation == driverXLocation); // false

// Greater than operator

var driverXDistance = 100;
console.log(driverXDistance > 50); // true  
console.log(driverXDistance < 50); // false 
console.log(driverXDistance >= 100); // true

// === operator
// It is used to check if 2 values are equal and of the same datatype.

x = 10;
y = '10';

console.log(x == y); // true
console.log(x === y); // false

// Logical operators
// They are used to combine conditional statements.

