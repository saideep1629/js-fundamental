// this -> keyword

// console.log(this);

// Function as a Method of an Object
const person = {
    userName : "saideep",
    age : 23,
    greet : () => {
        console.log(this);
        return (this.userName);
    }
}

console.log(person.greet());


// function show(){
//    console.log(this);
    
// };

// show();



