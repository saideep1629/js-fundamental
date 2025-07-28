
// // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// // const result = arr.reduce(
// //     function(acc, curVal){
// //         console.log(`acc: ${acc} and currVal ${curVal}`);
// //         return acc + curVal;
// //     },0);
// // console.log(result);


// //  Group items

// // const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
// // const count = fruits.reduce((acc, fruit) => {
// //   acc[fruit] = (acc[fruit] || 0) + 1;
// //   console.log(acc);
// //   return acc;
// // }, {});
// // console.log(count); 

// // reduce()
// // reduce array to single value
// // return single value
// // does not mutate original array
// // aggregate data

// // ********************************************************












// const arr = [ 1, 2, 3, 4, 10, 20, 30];
// const newArr = arr.filter((val) => (val > 4));

// console.log(newArr);



// const array = [1, 2, 4, 5, 6];

// const newArray = array.map((val) => (val * 10));
// console.log(newArray);








const arr = [ 1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

// i want a newArray with elements greater than 5

const newArr = arr.filter((val) => (val > 5));

console.log(newArr);  //  [10, 20, 30, 40, 50]
console.log(arr); //  [ 1, 2, 3, 4, 5, 10, 20, 30, 40, 50]












// const newArray = [];

// for (const elem of array) {
//     newArray.push(elem * 10);
    
// }

// console.log(newArray);
