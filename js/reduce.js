const findMax = (arr) => {
    if (arr.length === 0) return null;
  
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
  };
  
  const numbers = [10, 5, 20, 8, 15];
  const maxNumber = findMax(numbers);
  console.log('Max Number:', maxNumber);
  


  const sumOfEven = (arr) => {
    return arr.reduce((sum, current) => (current % 2 === 0 ? sum + current : sum), 0);
  };
  
  const evenSum = sumOfEven(numbers);
  console.log('Sum of Even Numbers:', evenSum);

  
  const calculateAverage = (arr) => {
    if (arr.length === 0) return null;
  
    const sum = arr.reduce((total, current) => total + current, 0);
    return sum / arr.length;
  };
  
  const average = calculateAverage(numbers);
  console.log('Average:', average);
  