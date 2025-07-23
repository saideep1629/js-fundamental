// for loop
// while loop
//do while loop


// We know beforehand how many times we want to loop -> for loop

// for (initialization; condition; increment) {
//  code to run
// }



// while loop -> we don’t know in advance how many times the loop will run, but want to keep looping while a condition is true.

//while (condition) {
// code to run
//}


// We want the loop body to run at least once, even if the condition is false. -> do...while loop

// let i = 1;
// do {
//   console.log("Do-while loop count:", i);
//   i++;
// } while (i <= 5);

// ************************************************


for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


let count = 3;
while (count > 0); {
  console.log(count);
  count--;
}


let x = 10;
do {
  console.log("Value of x:", x);
  x++;
} while (x < 5);


let sum = 0;
for (let i = 1; i <= 4; i++) {
  sum += i;
}
console.log(sum);


for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}


for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// **************************** 