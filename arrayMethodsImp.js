
// // // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// // // const result = arr.reduce(
// // //     function(acc, curVal){
// // //         console.log(`acc: ${acc} and currVal ${curVal}`);
// // //         return acc + curVal;
// // //     },0);
// // // console.log(result);


// // //  Group items

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);
// { apple: 2, banana: 2, orange: 1 } 




// reduce()
// reduce array to single value
// return single value
// does not mutate original array
// aggregate data

// // ********************************************************












// const arr = [ 1, 2, 3, 4, 10, 20, 30];
// const newArr = arr.filter((val) => (val > 4));

// console.log(newArr);



// const array = [1, 2, 4, 5, 6];

// const newArray = array.map((val) => (val * 10));
// console.log(newArray);








const arr = [ 10, 20, 30, 40 ];

const add = arr.reduce((acc, currVal) => {
  return acc + currVal;
  
})

console.log(add); // 100

















// const newArray = [];

// for (const elem of array) {
//     newArray.push(elem * 10);
    
// }

// console.log(newArray);
