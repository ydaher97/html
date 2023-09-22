const welcome = () => {
    let welcomeMessage = 'Welcome to Appleseeds Bootcamp!';
    return welcomeMessage;
  };
  
  const power = a => Math.pow(a, 2)
    // let result = ;
    // return result;
  
  
  const add = (a, b = 5) => {
    let sum = a + b;
    return sum;
  };
  
  function hello() {
    return "Hello!";
  }
  
  function squareRoot(a) {
    return Math.sqrt(a);
  }
  
  function randomNumbers(a, b) {
    return Math.random() * (a - b) + b;
  }
  

  console.log(power(2))