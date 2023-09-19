function removeDuplicates(arr) {
    const result = [];
    arr.forEach(item => {
      if (result.indexOf(item) === -1) {
        result.push(item)
      }
    });
    return result
  }
  
  const arr = [3, 4, 4, 3, 6, 3];
  const dupArr = removeDuplicates(arr);
  
  console.log(dupArr);
  