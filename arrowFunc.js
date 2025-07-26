// Arrow functions are a shorter syntax for writing functions in JavaScript.
// They are especially useful for concise code and preserving this from the surrounding context.


// function addNum(num1, num2){
//     let result = num1 + num2;
//     return result;
// }

// console.log(addNum(10, 20));


// const addData = (num1, num2) => {
//     let result = num1 + num2;
//     return result;
// }

// console.log(addData(10, 20));


const add = (num1, num2) => num1 + num2;
console.log(add(10,30));

// ****************************** 

const person = {
  name: "Saideep",
  greet: function() {
    console.log(this.name);
  }
};
person.greet(); // "Saideep"
// **********************



const person1 = {
  name: "Saideep",
  greet: () => {
    console.log(this.name);
  }
};

person1.greet();


// greet is an arrow function, which does not have its own this.

// It inherits this from the outer (lexical) scope, which is likely the global object (e.g., window in browsers).

