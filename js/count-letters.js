function countLetters(arr) {
    const letterCount = {};
    let mostOccurrences = 0;
    let mostOccurrencesLetter = '';
  
    for (const str of arr) {
      const letters = str.toLowerCase().replace(/[^a-z]/g, '').split('');
      for (const letter of letters) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
  
        if (letterCount[letter] > mostOccurrences) {
          mostOccurrences = letterCount[letter];
          mostOccurrencesLetter = letter;
        }
      }
    }
  
    const result = { ...letterCount };
    result['Most Occurring Letter'] = {
      letter: mostOccurrencesLetter,
      occurrences: mostOccurrences
    };
  
    return result;
  }
  
  const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
  const letterCounts = countLetters(array);
  console.log(letterCounts);
  