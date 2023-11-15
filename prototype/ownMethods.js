Array.prototype.customFilter = function(callback) {
    const filteredArray = [];
  
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }
  
    return filteredArray;
  };
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
//   const evenNumbers = numbers.customFilter(function(num) {
//     return num % 2 === 0;
//   });
  
//   console.log(evenNumbers);
  


  Array.prototype.customFind = function(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            return this[i];
        }
    }
    return undefined;
  }

  const largerNum = numbers.customFind(function(num){
    return num > 4;
  })


  console.log(largerNum)



  Array.prototype.customReduce = function(callback){
    let acc = 0
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            acc += this[i]
        }
    }
    return acc;
  }


  const reduceArray = numbers.customReduce(function(accumulator , currentValue){
    return accumulator +=  currentValue;
  }, 0)

  console.log(reduceArray)
