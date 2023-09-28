function isString(str, callback) {
    if (typeof str === 'string') {
      callback(str);
    } else {
      console.log('The input is not a string.');
    }
  }
  
  function firstWordUpperCase(str, callback) {
    const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
  
    callback(capitalizedStr);
  }
  
  function logString(str) {
    console.log('String:', str);
  }
  
  function createDashes(str) {
    const dashedStr = str.split(' ').join('-');
    console.log('Dashed String:', dashedStr);
  }
  
  const inputString = 'hello world';
  
  isString(inputString, logString);
  
  firstWordUpperCase(inputString, createDashes);
  