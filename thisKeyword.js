// // this -> keyword

// // console.log(this);

// In a regular function defined inside an object, the this keyword refers to the object itself.
// Arrow functions do not have their own this; they inherit this from their surrounding (lexical) scope.

// // Function as a Method of an Object
const person = {
    userName : "saideep",
    age : 23,
    greet : function(){
        return `hello world, ${this.userName}`;
    } 
    
}

console.log(person.greet());


// // function show(){
// //    console.log(this);
    
// // };

// // show();

// console.log(this);







