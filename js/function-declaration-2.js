// From function declarations to explicit and implicit return functions (one of each).
const welcome = function () {
    let welcomeMessage = 'Welcome to Appleseeds Bootcamp!';
    return welcomeMessage;
  }
  
const power = function(a) {
    let result = Math.pow(a, 2);
    return result;
  };
 
//implicit return functions 
//   const welcome = () => {
//     let welcomeMessage = 'Welcome to Appleseeds Bootcamp!';
//     return welcomeMessage;
//   };
  
// const power = a => {
//     let result = Math.pow(a, 2);
//     return result;
//   };
  
  
  
//IIFE

const squareRoot = ((a) => {
    return Math.sqrt(a);
  })(16); 
  
const randomNumbers = ((a, b) => {
    return Math.random() * (a - b) + b;
  })(10, 5); 
  

  console.log(welcome());  
  console.log(power(5))
  console.log(squareRoot);
  console.log(randomNumbers);  
    