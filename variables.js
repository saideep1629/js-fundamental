// var, let, const

// var / let / const variableName = value;


// var  -> Not used (Used in old code)


// let -> block scope
//     -> Can't be redeclared in the same scope


// const -> block scope 
//       -> Can't be redeclared
//       -> Can't be reaasigned



const number = 10;
//  number = 30;

console.log("before block scope", number);

{
    const number = 30;
    console.log("inside block scope", number);  
}

console.log("after block scope", number);



