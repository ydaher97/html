function countryInfo(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
  }
  
  const info1 = countryInfo('spain', 47, 'madrid');
  const info2 = countryInfo('usa', 331, 'washington');
  const info3 = countryInfo('japan', 126, 'tokyo');
  
  console.log(info1);
  console.log(info2);
  console.log(info3);
  