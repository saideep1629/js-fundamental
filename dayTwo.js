// conversion

let num = "123";
let newNum = Number(num);  // converion from String to Number

let isLoggedIn = true;
isLoggedIn = Number(isLoggedIn); // conversion from Boolean to Number


// **********************************************

// use of backtick

let user = "ganesh";
let age = 23;
let email = "ram@gmail.com"

console.log(`userName is ${user} age is ${age} email is ${email}`);


// ***********************************************

// Arithmetic -> Used to perform mathematical operations.
// +, -, /, *, %, **

// Increment / decrement -> Used to increase or decrease a value by one.
// Postfix: a++ returns a then increments.
// Prefix: ++a increments then returns new value.

// Assignment -> Used to assign values to variables.
// =, +=, *=, /=, -=

// Comparison -> Used to compare two values, returns a boolean.

// Logical -> Used to combine multiple conditions.  
// && || !

// Ternary -> Shorthand for if...else statements
// let age = 20;
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);

// Bitwise -> Works on binary (bit-level) representations.

// ********************************************************************

// Express in JS

//An expression is a unit of code that evaluates to a single value.

//  Arithmetic Expression -> An expression that uses arithmetic operators to perform a mathematical calculation and returns a numeric value.
// let result = 10 + 5 * 2; 

// An expression that involves string values and string operators (usually +) and returns a string.
// let greeting = "Hello" + " " + "World!"; 

// Boolean Expression -> An expression that evaluates to a Boolean value (true or false) by using comparison or logical operators.
// let isAdult = age >= 18; // true or false depending on age
// let canVote = isAdult && isCitizen;

// Assignment Expression -> An expression that assigns a value to a variable using =, +=, -=, etc.
// let x = 10;
// x += 5; 

// Ternary Expression -> A conditional expression that uses the ternary operator ? : to evaluate a condition and return one of two values.
// let status = (marks >= 35) ? "Pass" : "Fail";

// *********************************************************************************************************

// if Statement

if(4 > 3){
    console.log("4 is greater than 3");  
}

// if...else Statement

let myAge = 25;

if (myAge >= 18 && myAge <= 60) {
  console.log("You are eligible to work");
} else {
  console.log("You are not eligible to work");
}

// if...else if....else Statement

let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// Ternary Operator

let newAge = 56;

let result = (newAge >= 18) ? "Adult" : "Minor";
console.log(result);

// Switch Statement

let city = "Mumbai";

switch (city) {
  case "Delhi":
    console.log("Namaste from Delhi!");
    break;
  case "Mumbai":
    console.log("Welcome to the City of Dreams!");
    break;
  case "Kolkata":
    console.log("Nomoshkar from Kolkata!");
    break;
  default:
    console.log("City not found in the list");
}

// ************************************************************************

// for loop 

for(let i=0; i<5; i++){
    console.log("Hello world");
    
}

for(let i=2; i<=10; i+=2){
    console.log(i); 
}

// ***************************************************************************
