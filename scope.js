// Scope determines the accessibility (visibility) of variables.

// types of scope 

// Global scope                           
// Local scope
// functional scope
// block scope

         
// Global Scope

// Variables declared outside of any function or block are in the global scope.

// They are accessible anywhere in your JavaScript code.


let globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar); 
}
showGlobal();
console.log(globalVar); 

// **************************

// Function Scope

// Variables declared inside a function are only accessible within that function.

function greet() {
  let user = "Ram";
  console.log(name);
}
greet();
console.log(user); 


// function multiplyNumBy10(num){
//     let result = num * 10;
//     return result;
// }

// console.log(multiplyNumBy10(12));
// console.log(result);


// ************************************
//  Block Scope

// Variables declared using 'let' or 'const' inside a {} block (like if, for, etc.) are block-scoped.


{
  let a = 10;
  const b = 20;
  var c = 30;
}
console.log(c); 
console.log(a); 
console.log(b);

