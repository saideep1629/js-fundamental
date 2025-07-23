// // greeting example

// // why we used function ? -> example

function greet(name) {
  console.log(`hello how are you ${name}`);
}

greet("Ganesh");
greet("Deep");
greet("Ravi");

// // Functions are used to organize, reuse, and simplify code.

// //we can write a block of code once and use it many times without rewriting.


// // Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// function addNum(num1, num2){
//     let n1 = Number(num1);
//     let n2 = Number(num2);

//     if(isNaN(n1) || isNaN(n2)){
//         return "Provide proper number";
//     }

//     return n1 + n2;
// }

// console.log(addNum(3, "abc")); 


// // **********************************

// Parameter
// Definition: A parameter is a variable listed inside the parentheses in a function definition.

// Purpose: It acts as a placeholder to receive a value when the function is called.


//  Argument
// Definition: An argument is the actual value passed to a function when it is called.

// Purpose: It provides the data that the function uses to perform its task.

// // ******************************************

// // Functions can take inputs (parameters) and give outputs (return values), making them powerful tools.
// // function add(a, b) {
// //   return a + b;
// // }

// // let result = add(5, 3);
// // console.log("Result is: " + result);

// // ***********************************************************


// // function addNum(num1, num2){
// //     console.log(num1 + num2);
// //     // console.log("Hello, I am here");
// // }

// // addNum(3, 4);
// // // console.log(addNum(4, 5));









// console.log("hello how are you sai");
// console.log("hello how are you deep");
// console.log("hello how are you ram");
// console.log("hello how are you deepak");





// function printGreeting(name){
//     console.log (`hello how are you ${name}`);  
// }

// console.log(printGreeting("sai"));
// printGreeting("deep");
// printGreeting("deepak");
// printGreeting("ram");

function addNum(num1, num2){
    let n1 = Number(num1);
    let n2 = Number(num2);

    if(isNaN(n1) || isNaN(n2)){
        return ("Enter proper number");
    }
    
    return n1 + n2;
}

console.log(addNum(10, "20abc"));








let num = 12;
console.log(isNaN(num));

let num1 = "123abc";
console.log(isNaN(num1));



