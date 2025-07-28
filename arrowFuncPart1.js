// Arrow functions are a shorter syntax for writing functions in JavaScript.

// ******************************************************

// () => expression   

1
// const greeting = () => ("hello world");
// console.log(greeting());
2
// const addNum = (val) => (val + 5);
// console.log(addNum(3));

3
// (param) => expression

// const addNum = (val) => val + 5;
// console.log(addNum(3));

4
// param => expression
// const addNum = val => val + 5;
// console.log(addNum(3));

5
// (param1, paramN) => expression
// const addNum = (num1, num2) => num1 + num2;
// console.log(addNum(2, 3));

6
// () => {
//   statements
// }

// const addNum = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addNum(10, 20));

7
// param => {
//   statements
// }

// (param1, paramN) => {
//   statements
// }

// **************************************************************


function addNum(num1, num2){
    let result = num1 + num2;
    return result;
}

console.log(addNum(10, 20));


// const addData = (num1, num2) => {
//     let result = num1 + num2;
//     return result;
// }

// console.log(addData(10, 20));


// const add = (num1, num2) => num1 + num2;
// console.log(add(10,30));

// ****************************** 

// const person = {
//   name: "Saideep",
//   greet: function() {
//     console.log(this.name);
//   }
// };
// person.greet(); // "Saideep"
// **********************



// const person1 = {
//   name: "Saideep",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// person1.greet();


// greet is an arrow function, which does not have its own this.

// It inherits this from the outer (lexical) scope, which is likely the global object (e.g., window in browsers).


function greeting(){
    return "hello world";
}

console.log(greeting());


function addNum5(num1){
    return num1 + 5;
}


