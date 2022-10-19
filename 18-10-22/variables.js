// How to create variables in JavaScript
// firstname, lname, dob, gender, address, phone.

var firstname = "John";
console.log(firstname);

// What are keywords in JavaScript?
// They are predfeined words in JavaScript that have special meaning.

// var, console, function, if, for, while, let, const, break, function and return are keywords in JavaScript.

// What are identifiers in JavaScript?
// They are names given to variables, functions, objects, and properties.

// What are datatypes in JavaScript?
// They are the type of data that can be stored in a variable.

// They are: string, number, boolean, null, undefined, object, symbol.

// To find a datatype of a variable, use the typeof operator.

// Object
// Stores data in key-value pairs.

var employee = { id: 1, name: "John", age: 35, salary: 1000 };
console.log(employee);
console.log(typeof employee);

// Undefined
// It is a datatype that indicates that a variable has not been assigned a value.

var x;
console.log(x);

// function
// It is a datatype that stores a function. They can also be stored in variables.
// arguements are the values passed to a function when it is called.

var add = function (a, b)
{
    return a + b;
}

// to call the function, use the function name followed by parenthesis.

console.log(add(10, 20));

// create a function that multiplies 2 numbers and divides the result by 2.
var multiply = function (a, b, c)
{
    return (a * b) / c;
}

console.log(multiply(6, 5, 2));

// operators are symbols that perform operations on variables and values.
// some examples are: +, -, *, /, %, ++, --, +=, -=, *=, /=, %=, ==, ===, !=, !==, >, <, >=, <=, &&, ||, !, ?.