
// Logical operators
// They are used to combine conditional statements.

// For example, facebook.com has a login page.
// The user is required to enter their email and password.
// The user can only login if the email and password are correct.
// The email and password are compared to the database to check if they are correct.
// If the email and password are correct, the user is logged in.
// If the email and password are incorrect, the user is not logged in.

var username = "johndoe";
var password = "123456";

var usernameFromDB = "johndoe";
var passwordFromDB = "123456";

var isLoggedIn = username == usernameFromDB && password == passwordFromDB;
var isAlreadyLoggedIn = true;

// Using the logical AND operator to check if the username and password are correct.
// is username equal to usernameFromDB AND is password equal to passwordFromDB?


console.log(isLoggedIn); // true

if(isLoggedIn){
    console.log("Welcome to your profile.");
}else{
    console.log("Wrong username or password.");
}

// OR operator
// Using the logical OR operator to check if the user is already logged in.
// is isLoggedIn equal to true OR is isAlreadyLoggedIn equal to true?

if(isLoggedIn || isAlreadyLoggedIn){
    console.log("Welcome to your profile.");
}else{
    console.log("Wrong username or password.");
}

// Increment operator
// It is used to increment a value by 1.

var num = 10;
num++; // num = num + 1;

console.log(num++); // 10

var x = 10;
var y = 20;

var z = x + y++;
console.log(z);

console.log(++z);

var a = z++;
console.log(a);
console.log(z);