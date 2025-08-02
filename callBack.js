// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// *****************************************************

// One function receives and calls another function

// *****************************************************

const greetUser = (name, callback) => {
   console.log(`hello ${name}`);
   setTimeout(callback, 5000);
}

const showMsg = () => {
    console.log("welcome to my world");
}

greetUser("sai", showMsg);

// ***********************************************************

const numbers = [1, 2, 3, 4];

numbers.forEach((num) => {
  console.log(num * 2); // callback function used here
});

// ****************************************************************






// // function greet() {
// //   return "hello world";
// // }

// // function sayBye() {
// //   return "goodBye";
// // }


// // console.log(greet());
// // console.log(sayBye());




// function greet(callback){
//     console.log("hello world");
//     callback();
// }

// function sayBye(){
//     console.log("goodBye");
    
// }

// greet(sayBye);




function first(name){
  console.log(name);
  setTimeout(() => {
    console.log("welcome to my world");
  }, 3000);
}

first("sai");