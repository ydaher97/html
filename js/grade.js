function getScoreFromLetter(letter) {
    // const upperCaseLetter = letter.toUpperCase();
  
    switch (letter) {
      case 'A':
        return ' 90-100: A';
      case 'B':
        return ' 80-89: B';
      case 'C':
        return ' 70-79: C';
      case 'D':
        return ' 65-69: D';
      case 'F':
        return ' 0-64: F';
      default:
        return 'Invalid letter grade';
    }
  }
  
  function getLetterFromScore(score) {
    const numericScore = parseFloat(score);
  
    if (isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
      return 'Invalid numeric score';
    }
  
    if (numericScore >= 90) {
      return 'A';
    } else if (numericScore >= 80) {
      return 'B';
    } else if (numericScore >= 70) {
      return 'C';
    } else if (numericScore >= 65) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  const userInput1 = prompt('Enter your letter grade A-F');
  const userLetter = userInput1.trim().toUpperCase();
  
  if (/^[A-F]$/.test(userLetter)) {
    const scoreMessage = getScoreFromLetter(userLetter);
    console.log(scoreMessage);
  } else {
    alert('Invalid input for letter grade');
  }
  
  const userInput2 = prompt('Enter your numeric score');
  const userScore = parseFloat(userInput2);
  


  if (!isNaN(userScore) && userScore >= 0 && userScore <= 100) {
    const letterGrade = getLetterFromScore(userScore);
    console.log(` ${userScore}: ${letterGrade}`);
  } else {
    alert('Invalid input for numeric score');
  }
  