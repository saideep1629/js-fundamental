const car = {
    name: 'Indica',
    speed: 30,
    acclerate : () =>{         // arrow funtion is used
        console.log(this.speed);  // undefined
        return this.speed + 10;
    }
}

console.log(car.acclerate()); // NaN

// // // *******************************************************************



function showArgs() {   // parameters are not defined
  console.log(arguments); 
}

showArgs(10, 20, 30)  // arguments are passed


