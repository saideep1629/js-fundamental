console.log("first");
console.log("second");
console.log("three");
console.log("four");

// ***************************************************

console.log("start");

setTimeout(() => {
    console.log("Async task complete");    
}, 5000);

console.log("end");

// **********************************************************

// setTimeout() is a built-in JavaScript function that allows you to delay the execution of a function by a specified amount of milliseconds.

// ***********************************************************

let count = 1;

const intervalId = setInterval(() => {
  console.log("Count:", count);
  count++;
   if(count > 6){
    clearInterval(intervalId);
    console.log("stopped interval");
    
  }

}, 1000);

// ********************************************************

console.log("start");

setTimeout(() => {
    console.log("timer starting");
    
}, 5000);

console.log("end");

// *******************************************





// setInterval(() => {
//   console.log("This runs every 2 seconds");
// }, 2000);




function greet(){
  console.log("hello");
  
}

setTimeout(greet, 4000);