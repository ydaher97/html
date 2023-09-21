function swapProAndVal(obj) {
    const swapObj = {};
  
    for (const key in obj) {
        swapObj[obj[key]] = key;
    }
  
    return swapObj;
  }
  
  const originalObject = { a: 1, b: 2, c: 3 };
  const swapObject = swapProAndVal(originalObject);
  
  console.log("Original", originalObject);
  console.log("Swap", swapObject);
  