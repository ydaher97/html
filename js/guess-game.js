const targetNumber = Math.floor(Math.random() * 51); 
let guessed = false;

 while (!guessed) {
  const userGuess = parseInt(prompt('Enter your guess (between 0 50)'), 10);

  if (isNaN(userGuess)) {
    console.log(' enter a number');
  } else if (userGuess === targetNumber) {
    alert(' You guessed the correct number');
    guessed = true;
  } else if (userGuess < targetNumber) {
    console.log('Too low! Try again');
  } else {
    console.log('Too high! Try again');
  }
}
