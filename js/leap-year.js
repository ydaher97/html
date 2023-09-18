function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  function printLeapYearStatus(year) {
    if (isLeapYear(year)) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  }
  
  printLeapYearStatus(2012);  
  printLeapYearStatus(2100);  
  printLeapYearStatus(2400);  
  